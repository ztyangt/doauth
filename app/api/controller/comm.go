package controller

import (
	"doauth/app/facade"
	"doauth/app/model"
	"doauth/app/validator"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/cast"
	"github.com/unti-io/go-utils/utils"
	"gopkg.in/gomail.v2"
	"strings"
	"time"
)

type Comm struct {
	// 继承
	base
}

// IGET - GET请求本体
func (this *Comm) IGET(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IPOST - POST请求本体
func (this *Comm) IPOST(ctx *gin.Context) {

	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"send-email": this.sendEmail,
		//"social-login":  this.socialLogin,
		//"check-token":   this.checkToken,
		//"reset-passowd": this.resetPassword,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IPUT - PUT请求本体
func (this *Comm) IPUT(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IDEL - DELETE请求本体
func (this *Comm) IDEL(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"logout": this.logout,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// INDEX - GET请求本体
func (this *Comm) INDEX(ctx *gin.Context) {
	this.json(ctx, nil, facade.Lang(ctx, "没什么用！"), 202)
}

// 忘记密码
func (this *Comm) resetPassword(ctx *gin.Context) {

	// 表数据结构体
	table := model.Users{}
	// 请求参数
	params := this.params(ctx, map[string]any{
		"source": "default",
	})

	// 必须有一个不能为空
	if utils.Is.Empty(params["account"]) && utils.Is.Empty(params["social"]) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 和 %s 必须有一个不能为空！", "account", "social"), 400)
		return
	}

	// 验证器
	err := validator.NewValid("users", params)

	// 参数校验不通过
	if err != nil {
		this.json(ctx, nil, err.Error(), 400)
		return
	}

	// 检查类型，邮箱或者手机号
	var social string
	if !utils.Is.Empty(params["social"]) {
		social = utils.Ternary(utils.Is.Email(params["social"]), "email", social)
		social = utils.Ternary(utils.Is.Phone(params["social"]), "phone", social)
	}

	var user map[string]any

	// 账号优先
	if !utils.Is.Empty(params["account"]) {

		// 判断账号是否已经注册
		user = facade.DB.Model(&table).Where("source", params["source"]).Where("account", params["account"]).Find()
		if utils.Is.Empty(user) {
			this.json(ctx, nil, facade.Lang(ctx, "该账号未注册！"), 400)
			return
		}

		// 找回密码
		this.password(ctx, user)
		return
	}

	// 判断是否已经注册
	user = facade.DB.Model(&table).Where("source", params["source"]).Where(social, params["social"]).Find()
	if utils.Is.Empty(user) {
		switch social {
		case "email":
			this.json(ctx, nil, facade.Lang(ctx, "该邮箱未注册！"), 400)
			return
		case "phone":
			this.json(ctx, nil, facade.Lang(ctx, "该手机号未注册！"), 400)
			return
		}
	}

	// 找回密码
	this.password(ctx, user)
}

// 忘记密码
func (this *Comm) password(ctx *gin.Context, user map[string]any) {

	// 请求参数
	params := this.params(ctx)

	drives := cast.ToStringMap(facade.SMSToml.Get("drive"))

	// 驱动、社交、驱动模式
	var drive, social, mode string

	// 邮箱驱动 - 次之
	if !utils.Is.Empty(drives["email"]) && !utils.Is.Empty(user["email"]) {
		mode = "email"
		drive = cast.ToString(drives["email"])
		social = cast.ToString(user["email"])
	}

	// SMS驱动 - 优先 - 覆盖
	if !utils.Is.Empty(drives["sms"]) && !utils.Is.Empty(user["phone"]) {
		mode = "sms"
		drive = cast.ToString(drives["sms"])
		social = cast.ToString(user["phone"])
	}

	// 如果提交了 social
	if !utils.Is.Empty(params["social"]) {
		var unknown string
		unknown = utils.Ternary(utils.Is.Email(params["social"]), "email", mode)
		unknown = utils.Ternary(utils.Is.Phone(params["social"]), "sms", mode)
		// 如果驱动存在，且提交的 social 也存在
		if !utils.Is.Empty(drives[mode]) && !utils.Is.Empty(unknown) {
			mode = unknown
			social = cast.ToString(params["social"])
			drive = cast.ToString(drives[mode])
		}
	}

	// 都不满足
	if utils.Is.Empty(drive) {

		// 既没开启邮箱驱动，也没开启SMS驱动
		if utils.Is.Empty(drives["email"]) && utils.Is.Empty(drives["sms"]) {
			this.json(ctx, nil, facade.Lang(ctx, "请联系管理员重置密码！"), 400)
			return
		}

		if !utils.Is.Empty(user["phone"]) {
			this.json(ctx, nil, facade.Lang(ctx, "管理员未开启短信服务，无法发送验证码！"), 400)
			return
		}

		if !utils.Is.Empty(user["email"]) {
			this.json(ctx, nil, facade.Lang(ctx, "管理员未开启邮箱服务，无法发送验证码！"), 400)
			return
		}

		this.json(ctx, nil, facade.Lang(ctx, "请联系管理员重置密码！"), 400)
		return
	}

	// 缓存名称
	cacheName := fmt.Sprintf("%v-%v", drive, social)

	// 验证码为空 - 发送验证码
	if utils.Is.Empty(params["code"]) {

		sms := facade.NewSMS(drive).VerifyCode(social)
		if sms.Error != nil {
			this.json(ctx, nil, sms.Error.Error(), 400)
			return
		}
		// 缓存验证码 - 5分钟
		go facade.Cache.Set(cacheName, sms.VerifyCode, 5*time.Minute)

		msg := fmt.Sprintf("验证码发送至您的%v：%s，请注意查收！", utils.Ternary(mode == "email", "邮箱", "手机"), social)
		this.json(ctx, nil, facade.Lang(ctx, msg), 201)
		return
	}

	if utils.Is.Empty(params["password"]) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 不能为空！", "密码"), 400)
		return
	}

	// 获取缓存里面的验证码
	cacheCode := facade.Cache.Get(cacheName)

	if cast.ToString(params["code"]) != cast.ToString(cacheCode) {
		this.json(ctx, nil, facade.Lang(ctx, "验证码错误！"), 400)
		return
	}

	// 加密密码
	password := utils.Password.Create(params["password"])

	// 更新密码
	tx := facade.DB.Model(&model.Users{}).Where("id", user["id"]).UpdateColumn("password", password)
	if tx.Error != nil {
		this.json(ctx, nil, tx.Error.Error(), 400)
		return
	}

	// 删除验证码
	go facade.Cache.Del(cacheName)

	this.json(ctx, nil, facade.Lang(ctx, "密码重置成功！"), 200)
}

// 校验token
func (this *Comm) checkToken(ctx *gin.Context) {

	params := this.params(ctx)

	tokenName := cast.ToString(facade.AppToml.Get("app.token_name", "doauth_LOGIN_TOKEN"))

	var token string
	if !utils.Is.Empty(ctx.Request.Header.Get("Authorization")) {
		token = ctx.Request.Header.Get("Authorization")
	} else {
		token, _ = ctx.Cookie(tokenName)
	}

	if utils.Is.Empty(token) {
		this.json(ctx, nil, facade.Lang(ctx, "%s 不能为空！", "Authorization"), 412)
		return
	}

	// 解析token
	jwt := facade.Jwt().Parse(token)
	if jwt.Error != nil {
		this.json(ctx, nil, facade.Lang(ctx, "%s 无效！", "Authorization"), 400)
		return
	}

	// 表数据结构体
	table := model.Users{}
	// 查询用户
	item := facade.DB.Model(&table).Where("id", jwt.Data["uid"]).Find()
	if utils.Is.Empty(item) {
		this.json(ctx, nil, facade.Lang(ctx, "用户不存在！"), 204)
		return
	}

	// token 有效时长
	valid := jwt.Valid

	if cast.ToBool(params["renew"]) {
		jwt = facade.Jwt().Create(facade.H{
			"uid":  table.Id,
			"hash": facade.Hash.Sum32(table.Password),
		})
		valid = cast.ToInt64(utils.Calc(facade.AppToml.Get("jwt.expire", "7200")))
		// 往客户端写入cookie - 存储登录token
		setToken(ctx, jwt.Text)
	}

	delete(item, "password")

	this.json(ctx, gin.H{
		"user":       item,
		"token":      jwt.Text,
		"valid_time": valid,
	}, facade.Lang(ctx, facade.Lang(ctx, "合法的token！")), 200)
}

// 退出登录
func (this *Comm) logout(ctx *gin.Context) {
	ctx.SetCookie(cast.ToString(facade.AppToml.Get("app.token_name", "doauth_LOGIN_TOKEN")), "", -1, "/", "", false, false)
	this.json(ctx, nil, facade.Lang(ctx, "退出成功！"), 200)
}

// 发送邮件w
func (this *Comm) sendEmail(ctx *gin.Context) {
	if !this.isAdmin(ctx) {
		return
	}

	params := this.params(ctx, map[string]any{})

	err := validator.NewValid("email", params)
	if err != nil {
		this.json(ctx, nil, err.Error(), 400)
		return
	}

	item := gomail.NewMessage()
	nickname := cast.ToString(params["nickname"])
	account := cast.ToString(params["account"])
	item.SetHeader("From", nickname+"<"+account+">")
	// 发送给多个用户
	item.SetHeader("To", cast.ToString(params["receive"]))
	// 设置邮件主题
	item.SetHeader("Subject", cast.ToString(params["subject"]))
	// 设置邮件正文
	item.SetBody("text/html", cast.ToString(params["content"]))

	GoMail := gomail.NewDialer(cast.ToString(params["host"]), cast.ToInt(params["port"]), cast.ToString(params["account"]), cast.ToString(params["password"]))

	// 发送邮件
	err = GoMail.DialAndSend(item)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, err.Error()), 400)
		return
	}

	this.json(ctx, nil, facade.Lang(ctx, "发送成功！"), 200)
}
