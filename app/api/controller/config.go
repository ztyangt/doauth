package controller

import (
	"doauth/app/facade"
	"doauth/app/model"
	"github.com/gin-gonic/gin"
	"github.com/unti-io/go-utils/utils"
	"strings"
	"time"
)

type Config struct {
	base
}

func (this *Config) IGET(ctx *gin.Context) {
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"one":  this.one,
		"list": this.list,
	}

	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IPOST - POST请求本体
func (this *Config) IPOST(ctx *gin.Context) {

	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"save": this.save,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IPUT - PUT请求本体
func (this *Config) IPUT(ctx *gin.Context) {
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
func (this *Config) IDEL(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// INDEX - GET请求本体
func (this *Config) INDEX(ctx *gin.Context) {
	this.json(ctx, nil, facade.Lang(ctx, "没什么用！"), 202)
}

// 获取指定配置
func (this *Config) one(ctx *gin.Context) {

	code := 204
	msg := []string{"无数据！", ""}
	var data any

	//获取请求参数
	params := this.params(ctx)

	// 表数据结构体
	table := model.Config{}
	// 允许查询字段
	allow := []any{"key"}
	// 动态给结构体赋值
	for key, val := range params {
		//	防止恶意传入字段
		if utils.In.Array(key, allow) {
			utils.Struct.Set(&table, key, val)
		}
	}
	mold := facade.DB.Model(&table)
	mold.IWhere(params["where"]).IOr(params["or"]).ILike(params["like"]).INot(params["not"]).INull(params["null"]).INotNull(params["notNull"])
	data = mold.Where(table).Find()

	if !utils.Is.Empty(data) {
		code = 200
		msg[0] = "数据请求成功"
	}

	this.json(ctx, data, facade.Lang(ctx, strings.Join(msg, "")), code)
}

// 获取配置列表
func (this *Config) list(ctx *gin.Context) {
	if !this.isAdmin(ctx) {
		return
	}

	code := 204
	msg := []string{"无数据！", ""}
	var data any

	// 表数据结构体
	table := model.Config{}
	mold := facade.DB.Model(&table)

	mold.Column()

	data = mold.Where(table).Find()

	if !utils.Is.Empty(data) {
		code = 200
		msg[0] = "数据请求成功"
	}
	this.json(ctx, data, facade.Lang(ctx, strings.Join(msg, "")), code)
}

// 保存配置
func (this *Config) save(ctx *gin.Context) {
	if !this.isAdmin(ctx) {
		return
	}

	params := this.params(ctx)
	if utils.Is.Empty(params["key"]) {
		this.create(ctx)
	} else {
		this.update(ctx)
	}
}

// 创建数据
func (this *Config) create(ctx *gin.Context) {
	params := this.params(ctx)

	// 表数据结构体
	table := model.Config{CreateTime: time.Now().Unix(), UpdateTime: time.Now().Unix()}
	allow := []any{"key", "value", "json", "remark", "text"}

	// 动态给结构体赋值
	for key, val := range params {
		// 防止恶意传入字段
		if utils.In.Array(key, allow) {
			utils.Struct.Set(&table, key, val)
		}
	}

	// 创建数据
	tx := facade.DB.Model(&table).Create(&table)

	if tx.Error != nil {
		this.json(ctx, nil, tx.Error.Error(), 400)
		return
	}

	this.json(ctx, gin.H{"id": table.Id}, facade.Lang(ctx, "创建成功！"), 200)

}

// 更新数据
func (this *Config) update(ctx *gin.Context) {
	// 获取请求参数
	params := this.params(ctx)

	// 表数据结构体
	table := model.Config{}
	allow := []any{"key", "value", "json", "remark", "text"}
	async := utils.Async[map[string]any]()

	mold := facade.DB.Model(&table)
	data := mold.Where("key", params["key"]).Find()
	if utils.Is.Empty(data) {
		this.json(ctx, data, facade.Lang(ctx, "配置不存在"), 204)
		return
	}

	// 动态给结构体赋值
	for key, val := range params {
		// 防止恶意传入字段
		if utils.In.Array(key, allow) {
			async.Set(key, val)
		}
	}

	// 更新用户
	tx := facade.DB.Model(&table).WithTrashed().Where("key", params["key"]).Scan(&table).Update(async.Result())

	if tx.Error != nil {
		this.json(ctx, nil, tx.Error.Error(), 400)
		return
	}

	this.json(ctx, gin.H{"id": table.Id}, facade.Lang(ctx, "更新成功！"), 200)

}
