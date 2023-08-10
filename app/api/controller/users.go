package controller

import (
	"doauth/app/facade"
	"doauth/app/model"
	"doauth/app/validator"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/cast"
	"github.com/unti-io/go-utils/utils"
	"gopkg.in/gomail.v2"
	"math"
	"regexp"
	"strings"
	"time"
)

type Users struct {
	// 继承
	base
}

// IGET - GET请求本体
func (this *Users) IGET(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"one":    this.one,
		"all":    this.all,
		"count":  this.count,
		"column": this.column,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IPOST - POST请求本体
func (this *Users) IPOST(ctx *gin.Context) {

	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"login":    this.login,
		"register": this.register,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}

	// 删除缓存
	go this.delCache()
}

// IPUT - PUT请求本体
func (this *Users) IPUT(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"update":  this.update,
		"restore": this.restore,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}

	// 删除缓存
	go this.delCache()
}

// IDEL - DELETE请求本体
func (this *Users) IDEL(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"remove": this.remove,
		"delete": this.delete,
		"clear":  this.clear,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}

	// 删除缓存
	go this.delCache()
}

// INDEX - GET请求本体
func (this *Users) INDEX(ctx *gin.Context) {
	this.json(ctx, nil, facade.Lang(ctx, "没什么用！"), 202)
}

// 删除缓存
func (this *Users) delCache() {
	// 删除缓存
	facade.Cache.DelTags([]any{"[GET]", "users"})
}

// one 获取指定数据
func (this *Users) one(ctx *gin.Context) {

	code := 204
	msg := []string{"无数据！", ""}
	var data any

	// 获取请求参数
	params := this.params(ctx)

	// 表数据结构体
	table := model.Users{}
	// 允许查询的字段
	allow := []any{"id", "email"}
	// 动态给结构体赋值
	for key, val := range params {
		// 防止恶意传入字段
		if utils.In.Array(key, allow) {
			utils.Struct.Set(&table, key, val)
		}
	}

	mold := facade.DB.Model(&table)
	mold.IWhere(params["where"]).IOr(params["or"]).ILike(params["like"]).INot(params["not"]).INull(params["null"]).INotNull(params["notNull"])

	mold.WithoutField("password")

	item := mold.Where(table).Find()

	data = item

	if !utils.Is.Empty(data) {
		code = 200
		msg[0] = "数据请求成功！"
	}

	this.json(ctx, data, facade.Lang(ctx, strings.Join(msg, "")), code)
}

// all 获取全部数据
func (this *Users) all(ctx *gin.Context) {
	if !this.admin(ctx) {
		return
	}
	code := 204
	msg := []string{"无数据！", ""}
	var data any

	// 获取请求参数
	params := this.params(ctx, map[string]any{
		"page":  1,
		"order": "create_time desc",
	})

	// 表数据结构体
	table := model.Users{}
	// 允许查询的字段
	allow := []any{"source"}
	// 动态给结构体赋值
	for key, val := range params {
		// 防止恶意传入字段
		if utils.In.Array(key, allow) {
			utils.Struct.Set(&table, key, val)
		}
	}

	page := cast.ToInt(params["page"])
	limit := this.meta.limit(ctx)
	var result []model.Users
	mold := facade.DB.Model(&result)
	mold.IWhere(params["where"]).IOr(params["or"]).ILike(params["like"]).INot(params["not"]).INull(params["null"]).INotNull(params["notNull"])
	count := mold.Where(table).Count()

	mold.WithoutField("password")

	// 从数据库中获取数据
	item := mold.Where(table).Limit(limit).Page(page).Order(params["order"]).Select()

	data = item

	if !utils.Is.Empty(data) {
		code = 200
		msg[0] = "数据请求成功！"
	}

	this.json(ctx, gin.H{
		"data":  data,
		"count": count,
		"page":  math.Ceil(float64(count) / float64(limit)),
	}, facade.Lang(ctx, strings.Join(msg, "")), code)
}

// 登录
func (this *Users) login(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}
	// 请求参数
	params := this.params(ctx)

	if utils.Is.Empty(params["account"]) {
		this.json(ctx, nil, facade.Lang(ctx, "请提交邮箱或账号！"), 400)
		return
	}

	if utils.Is.Empty(params["password"]) {
		this.json(ctx, nil, facade.Lang(ctx, "请提交密码！"), 400)
		return
	}

	// 正则表达式，匹配通过空格分割的两个16位任意字符 `^(\w{16}) (\w{16})$`
	reg := regexp.MustCompile(`^([\w+]{16})\D+([\w+]{16})$`)
	match := reg.FindStringSubmatch(ctx.GetHeader("i-cipher"))

	// 密文解密
	if match != nil {

		cipher := facade.Cipher(match[1], match[2])

		deAccount := cipher.Decrypt([]byte(cast.ToString(params["account"])))
		dePassword := cipher.Decrypt(params["password"])
		if deAccount.Error != nil || dePassword.Error != nil {
			this.json(ctx, nil, facade.Lang(ctx, "帐号或密码解密失败！"), 400)
			return
		}

		params["account"] = deAccount.Text
		params["password"] = dePassword.Text
	}

	// 查询用户是否存在
	item := facade.DB.Model(&table).Or([]any{
		[]any{"email", "=", params["account"]},
		[]any{"account", "=", params["account"]},
	}).Find()

	if utils.Is.Empty(item) {
		this.json(ctx, nil, facade.Lang(ctx, "账户不存在！"), 400)
		return
	}

	if utils.Is.Empty(table.Password) {
		this.json(ctx, nil, facade.Lang(ctx, "该帐号未设置密码，请切换登录方式！"), 400)
		return
	}

	// 密码校验
	if utils.Password.Verify(table.Password, params["password"]) == false {
		this.json(ctx, nil, facade.Lang(ctx, "密码错误！"), 400)
		return
	}

	jwt := facade.Jwt().Create(facade.H{
		"uid":  table.Id,
		"hash": facade.Hash.Sum32(table.Password),
	})

	// 删除 item 中的密码
	delete(item, "password")
	// 更新用户登录时间
	item["login_time"] = time.Now().Unix()
	facade.DB.Model(&table).Where("id", table.Id).Update(map[string]any{
		"login_time": item["login_time"],
	})

	result := map[string]any{
		"user":  item,
		"token": jwt.Text,
	}

	// 往客户端写入cookie - 存储登录token
	setToken(ctx, jwt.Text)

	this.json(ctx, result, facade.Lang(ctx, "登录成功！"), 200)
}

// 注册
func (this *Users) register(ctx *gin.Context) {

	if !cast.ToBool(this.signInConfig()["value"]) {
		this.json(ctx, nil, "管理员关闭了注册功能！", 403)
		return
	}

	// 表数据结构体
	table := model.Users{}
	// 请求参数
	params := this.params(ctx)

	if !utils.Is.Empty(params["code"]) {
		// 验证器
		err := validator.NewValid("users", params)

		// 参数校验不通过
		if err != nil {
			this.json(ctx, nil, err.Error(), 400)
			return
		}
	}

	// 判断邮箱是否已经注册
	ok := facade.DB.Model(&table).Where([]any{
		[]any{"email", "=", params["email"]},
	}).Exist()
	// 已注册
	if ok {
		this.json(ctx, nil, facade.Lang(ctx, "该邮箱已经注册！"), 400)
		return
	}

	if !utils.Is.Empty(params["account"]) {
		// 判断账号是否已经注册
		ok := facade.DB.Model(&table).Where([]any{
			[]any{"account", "=", params["account"]},
		}).Exist()
		if ok {
			this.json(ctx, nil, facade.Lang(ctx, "该帐号已经注册！"), 400)
			return
		}
	}

	cacheName := "auth_code"

	// 验证码为空 - 发送验证码
	if utils.Is.Empty(params["code"]) {

		sms := this.sendCode(params["email"])
		if sms.Error != nil {
			this.json(ctx, nil, sms.Error.Error(), 400)
			return
		}
		// 缓存验证码 - 5分钟
		facade.Cache.Set(cacheName, sms.VerifyCode, 5*time.Minute)
		this.json(ctx, nil, facade.Lang(ctx, "验证码发送成功！"), 200)
		return
	}

	if utils.Is.Empty(params["password"]) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 不能为空！", "密码"), 400)
		return
	}

	// 获取缓存里面的验证码
	cacheCode := facade.Cache.Get(cacheName)

	if cast.ToString(params["code"]) != cacheCode {
		this.json(ctx, nil, facade.Lang(ctx, "验证码错误！"), 400)
		return
	}

	// 允许存储的字段
	allow := []any{"account", "password", "email", "nickname", "avatar", "description"}
	// 动态给结构体赋值
	for key, val := range params {
		// 加密密码
		if key == "password" {
			val = utils.Password.Create(params["password"])
		}
		// 防止恶意传入字段
		if utils.In.Array(key, allow) {
			utils.Struct.Set(&table, key, val)
		}
	}

	// 设置登录时间
	utils.Struct.Set(&table, "login_time", time.Now().Unix())

	// 创建用户
	tx := facade.DB.Model(&table).Create(&table)
	if tx.Error != nil {
		this.json(ctx, nil, tx.Error.Error(), 400)
		return
	}

	// 删除验证码
	facade.Cache.Del(cacheName)

	jwt := facade.Jwt().Create(facade.H{
		"uid":  table.Id,
		"hash": facade.Hash.Sum32(table.Password),
	})

	// 删除密码
	table.Password = ""

	result := map[string]any{
		"user":  table,
		"token": jwt.Text,
	}

	// 往客户端写入cookie - 存储登录token
	setToken(ctx, jwt.Text)

	this.json(ctx, result, facade.Lang(ctx, "注册成功！"), 200)
}

// update 更新数据
func (this *Users) update(ctx *gin.Context) {
	if !this.auth(ctx) {
		return
	}
	// 获取请求参数
	params := this.params(ctx)

	if utils.Is.Empty(params["id"]) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 不能为空！", "id"), 400)
		return
	}

	// 验证器
	err := validator.NewValid("users", params)

	// 参数校验不通过
	if err != nil {
		this.json(ctx, nil, err.Error(), 400)
		return
	}

	// 账号 唯一处理
	//if !utils.Is.Empty(params["account"]) {
	//	fmt.Println(params["account"])
	//	exist := facade.DB.Model(&model.Users{}).Where("id", "!=", params["id"]).Where("account", params["account"]).Exist()
	//	if exist {
	//		this.json(ctx, nil, facade.Lang(ctx, "账号已存在！"), 400)
	//		return
	//	}
	//}

	// 表数据结构体
	table := model.Users{}
	allow := []any{"id", "account", "password", "nickname", "email", "gender", "avatar", "description", "json", "text"}
	async := utils.Async[map[string]any]()

	// 动态给结构体赋值
	for key, val := range params {
		// 加密密码
		if key == "password" {
			val = utils.Password.Create(params["password"])
		}
		// 防止恶意传入字段
		if utils.In.Array(key, allow) {
			async.Set(key, val)
		}
	}

	// 更新用户
	user := facade.DB.Model(&table).WithTrashed().Where("id", params["id"])

	user.Find()

	tx := user.Scan(&table).Update(async.Result())

	if tx.Error != nil {
		this.json(ctx, nil, tx.Error.Error(), 400)
		return
	}

	// 删除缓存
	facade.Cache.Del(fmt.Sprintf("user[%v]", params["id"]))

	this.json(ctx, gin.H{"id": table.Id}, facade.Lang(ctx, "更新成功！"), 200)
}

// count 统计数据
func (this *Users) count(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}
	// 获取请求参数
	params := this.params(ctx)

	item := facade.DB.Model(&table)
	item.IWhere(params["where"]).IOr(params["or"]).ILike(params["like"]).INot(params["not"]).INull(params["null"]).INotNull(params["notNull"])

	this.json(ctx, item.Count(), facade.Lang(ctx, "查询成功！"), 200)
}

// column 获取单列数据
func (this *Users) column(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}
	// 获取请求参数
	params := this.params(ctx, map[string]any{
		"field": "*",
	})

	item := facade.DB.Model(&table).Order(params["order"])
	item.IWhere(params["where"]).IOr(params["or"]).ILike(params["like"]).INot(params["not"]).INull(params["null"]).INotNull(params["notNull"])

	item.WithoutField("password")

	if !strings.Contains(cast.ToString(params["field"]), "*") {
		item.Field(params["field"])
	}

	// id 数组 - 参数归一化
	ids := utils.Unity.Keys(params["ids"])
	if !utils.Is.Empty(ids) {
		item.WhereIn("id", ids)
	}

	code := 200
	data := item.Column()
	msg := facade.Lang(ctx, "查询成功！")

	if utils.Is.Empty(data) {
		code = 204
		msg = facade.Lang(ctx, "无数据！")
	}

	this.json(ctx, data, msg, code)
}

// remove 软删除
func (this *Users) remove(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}
	// 获取请求参数
	params := this.params(ctx)

	// id 数组 - 参数归一化
	ids := utils.Unity.Ids(params["ids"])

	if utils.Is.Empty(ids) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 不能为空！", "ids"), 400)
		return
	}

	if utils.In.Array(this.meta.user(ctx).Id, ids) {
		this.json(ctx, nil, facade.Lang(ctx, "不能删除自己！"), 400)
		return
	}

	item := facade.DB.Model(&table)

	// 得到允许操作的 id 数组
	ids = utils.Unity.Ids(item.WhereIn("id", ids).Column("id"))

	// 无可操作数据
	if utils.Is.Empty(ids) {
		this.json(ctx, nil, facade.Lang(ctx, "无可操作数据！"), 204)
		return
	}

	// 软删除
	tx := item.Delete(ids)

	if tx.Error != nil {
		this.json(ctx, nil, facade.Lang(ctx, "删除失败！"), 400)
		return
	}

	this.json(ctx, gin.H{"ids": ids}, facade.Lang(ctx, "删除成功！"), 200)
}

// delete 真实删除
func (this *Users) delete(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}
	// 获取请求参数
	params := this.params(ctx)

	// id 数组 - 参数归一化
	ids := utils.Unity.Ids(params["ids"])

	if utils.Is.Empty(ids) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 不能为空！", "ids"), 400)
		return
	}

	if utils.In.Array(this.meta.user(ctx).Id, ids) {
		this.json(ctx, nil, facade.Lang(ctx, "不能删除自己！"), 400)
		return
	}

	item := facade.DB.Model(&table).WithTrashed()

	// 得到允许操作的 id 数组
	ids = utils.Unity.Ids(item.WhereIn("id", ids).Column("id"))

	// 无可操作数据
	if utils.Is.Empty(ids) {
		this.json(ctx, nil, facade.Lang(ctx, "无可操作数据！"), 204)
		return
	}

	// 真实删除
	tx := item.Force().Delete(ids)

	if tx.Error != nil {
		this.json(ctx, nil, facade.Lang(ctx, "删除失败！"), 400)
		return
	}

	this.json(ctx, gin.H{"ids": ids}, facade.Lang(ctx, "删除成功！"), 200)
}

// clear 清空回收站
func (this *Users) clear(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}

	item := facade.DB.Model(&table).OnlyTrashed()

	ids := utils.Unity.Ids(item.Column("id"))

	// 无可操作数据
	if utils.Is.Empty(ids) {
		this.json(ctx, nil, facade.Lang(ctx, "无可操作数据！"), 204)
		return
	}

	// 找到所有软删除的数据
	tx := item.Force().Delete()

	if tx.Error != nil {
		this.json(ctx, nil, facade.Lang(ctx, "清空失败！"), 400)
		return
	}

	this.json(ctx, gin.H{"ids": ids}, facade.Lang(ctx, "清空成功！"), 200)
}

// restore 恢复数据
func (this *Users) restore(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}
	// 获取请求参数
	params := this.params(ctx)

	// id 数组 - 参数归一化
	ids := utils.Unity.Ids(params["ids"])

	if utils.Is.Empty(ids) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 不能为空！", "ids"), 400)
		return
	}

	item := facade.DB.Model(&table).OnlyTrashed().WhereIn("id", ids)

	// 得到允许操作的 id 数组
	ids = utils.Unity.Ids(item.Column("id"))

	// 无可操作数据
	if utils.Is.Empty(ids) {
		this.json(ctx, nil, facade.Lang(ctx, "无可操作数据！"), 204)
		return
	}

	// 还原数据
	tx := facade.DB.Model(&table).OnlyTrashed().Restore(ids)

	if tx.Error != nil {
		this.json(ctx, nil, facade.Lang(ctx, "恢复失败！"), 400)
		return
	}

	this.json(ctx, gin.H{"ids": ids}, facade.Lang(ctx, "恢复成功！"), 200)
}

// 获取注册配置
func (this *Users) signInConfig() (result map[string]any) {
	table := model.Config{}
	utils.Struct.Set(&table, "key", "allow_register")
	config := facade.DB.Model(&table).Where(table).Find()
	return map[string]any{
		"value": config["value"],
	}
}

// 设置登录token到客户的cookie中
func setToken(ctx *gin.Context, token any) {

	host := ctx.Request.Host
	if strings.Contains(host, ":") {
		host = strings.Split(host, ":")[0]
	}

	expire := cast.ToInt(facade.AppToml.Get("jwt.expire", "7200"))
	tokenName := cast.ToString(facade.AppToml.Get("app.token_name", "doauth_LOGIN_TOKEN"))

	ctx.SetCookie(tokenName, cast.ToString(token), expire, "/", host, false, false)
}

func (this *Users) sendCode(email any, code ...any) (response *facade.SMSResponse) {
	response = &facade.SMSResponse{}
	emailData := facade.DB.Model(&model.Config{}).Where(map[string]any{"key": "email_config"}).Find()

	emailConfig := cast.ToStringMap(emailData["json"])

	if !utils.Is.Email(email) {
		response.Error = errors.New("格式错误，请给一个正确的邮箱地址")
		return
	}

	if len(code) == 0 {
		code = append(code, utils.Rand.String(6, "0123456789"))
	}

	Template := "您的验证码是：${code}，有效期5分钟。（请不要把验证码告诉别人）"

	item := gomail.NewMessage()
	nickname := cast.ToString(emailConfig["nickname"])
	account := cast.ToString(emailConfig["account"])
	item.SetHeader("From", nickname+"<"+account+">")
	// 发送给多个用户
	item.SetHeader("To", cast.ToString(email))
	// 设置邮件主题
	item.SetHeader("Subject", "验证码")
	// 替换验证码
	temp := utils.Replace(Template, map[string]any{
		"${code}": code[0],
	})
	// 设置邮件正文
	item.SetBody("text/html", temp)

	GoMail := gomail.NewDialer(cast.ToString(emailConfig["host"]), cast.ToInt(emailConfig["port"]), cast.ToString(emailConfig["account"]), cast.ToString(emailConfig["password"]))
	// 发送邮件
	err := GoMail.DialAndSend(item)
	if err != nil {
		response.Error = err
		return response
	}

	response.VerifyCode = cast.ToString(code[0])

	return response
}
