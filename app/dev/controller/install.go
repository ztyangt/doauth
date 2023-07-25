package controller

import (
	"doauth/app/facade"
	"doauth/app/model"
	"doauth/app/validator"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/spf13/cast"
	"github.com/unti-io/go-utils/utils"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
	"strings"
	"time"
)

type Install struct {
	// 继承
	base
}

// IGET - GET请求本体
func (this *Install) IGET(ctx *gin.Context) {
	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"check": this.check,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IPOST - POST请求本体
func (this *Install) IPOST(ctx *gin.Context) {

	// 转小写
	method := strings.ToLower(ctx.Param("method"))

	allow := map[string]any{
		"connect": this.connectDB,
		"initdb":  this.initDB,
		"create":  this.createAdmin,
		"lock":    this.lock,
	}
	err := this.call(allow, method, ctx)

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, "方法调用错误：%v", err.Error()), 405)
		return
	}
}

// IPUT - PUT请求本体
func (this *Install) IPUT(ctx *gin.Context) {
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
func (this *Install) IDEL(ctx *gin.Context) {
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
func (this *Install) INDEX(ctx *gin.Context) {

	this.json(ctx, map[string]any{}, facade.Lang(ctx, "好的！"), 200)
}

// check - 检查安装锁状态
func (this *Install) check(ctx *gin.Context) {
	data := map[string]bool{
		"install": utils.Ternary[bool](this.isInstall(), true, false),
	}
	if this.isInstall() {
		this.json(ctx, data, facade.Lang(ctx, "程序已安装，禁止访问！"), 402)
	} else {
		this.json(ctx, data, facade.Lang(ctx, "程序未安装！"), 200)
	}
}

// connect - 步骤一：连接数据库
func (this *Install) connectDB(ctx *gin.Context) {

	params := this.params(ctx, map[string]any{})
	// 验证器
	err := validator.NewValid("install", params)

	// 参数校验不通过
	if err != nil {
		this.json(ctx, nil, err.Error(), 400)
		return
	}

	// 连接数据库
	conn, err := gorm.Open(mysql.New(mysql.Config{
		DSN: fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=True&loc=Local", params["username"], params["password"], params["hostname"], cast.ToString(params["hostport"]), params["database"], "utf8mb4"),
		// string 类型字段的默认长度
		DefaultStringSize: 256,
		// 禁用 datetime 精度，MySQL 5.6 之前的数据库不支持
		DisableDatetimePrecision: true,
		// 重命名索引时采用删除并新建的方式，MySQL 5.7 之前的数据库和 MariaDB 不支持重命名索引
		DontSupportRenameIndex: true,
		// 用 `change` 重命名列，MySQL 8 之前的数据库和 MariaDB 不支持重命名列
		DontSupportRenameColumn: true,
		// 根据当前 MySQL 版本自动配置
		SkipInitializeWithVersion: false,
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			// 表名前缀，`User` 的表名应该是 `t_users`
			TablePrefix: cast.ToString(params["prefix"]) + "_",
			// 使用单数表名，启用该选项，此时，`User` 的表名应该是 `t_user`
			SingularTable: true,
		},
		// 关闭终端显示查询信息
		Logger: logger.Default.LogMode(logger.Silent),
	})

	if err != nil {
		this.json(ctx, nil, facade.Lang(ctx, err.Error()), 400)
		return
	} else {

		// 初始化数据库配置文件
		facade.InitDBToml(map[string]any{
			"${mysql.hostname}": params["hostname"],
			"${mysql.hostport}": params["hostport"],
			"${mysql.username}": params["username"],
			"${mysql.database}": params["database"],
			"${mysql.password}": params["password"],
			"${mysql.prefix}":   cast.ToString(params["prefix"]) + "_",
			"${mysql.charset}":  "utf8mb4",
			"${mysql.migrate}":  "true",
		})
	}

	sqlDB, _ := conn.DB()
	// SetMaxIdleConns 设置空闲连接池中连接的最大数量
	sqlDB.SetMaxIdleConns(10)
	// SetMaxOpenConns 设置打开数据库连接的最大数量。
	sqlDB.SetMaxOpenConns(100)
	// SetConnMaxLifetime 设置了连接可复用的最大时间。
	sqlDB.SetConnMaxLifetime(time.Hour)

	facade.MySQL = &facade.MySqlStruct{
		Conn: conn,
	}
	this.json(ctx, nil, facade.Lang(ctx, "数据库连接成功！"), 200)
}

// initDB 步骤二：初始化数据库
func (this *Install) initDB(ctx *gin.Context) {
	if utils.File().Exist("config/database.toml") {
		facade.WatchDB(true)
		// 检查是否开启自动迁移
		if cast.ToBool(facade.NewToml(facade.TomlDb).Get("mysql.migrate")) {
			go model.InitTable()
		}
		this.json(ctx, nil, facade.Lang(ctx, "数据库初始化成功！"), 200)
	} else {
		this.json(ctx, nil, facade.Lang(ctx, "请先连接数据库！"), 400)
	}
}

// createAdmin - 步骤三 创建管理员账户
func (this *Install) createAdmin(ctx *gin.Context) {

	if utils.Is.Empty(facade.DBToml) {
		this.json(ctx, nil, facade.Lang(ctx, "请先连接数据库！"), 400)
		return
	}

	exist := facade.DB.Model(&model.Users{}).Where("level", "=", "1").Exist()

	if exist {
		this.json(ctx, nil, facade.Lang(ctx, "管理员账户已经存在！"), 200)
		return
	}

	params := this.params(ctx, map[string]any{})
	err := validator.NewValid("admin", params)

	if err != nil {
		this.json(ctx, nil, err.Error(), 400)
		return
	}

	// 表数据结构体
	table := model.Users{}

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

	// 管理员权限
	utils.Struct.Set(&table, "level", 1)

	// 创建用户
	tx := facade.DB.Model(&table).Create(&table)
	if tx.Error != nil {
		this.json(ctx, nil, tx.Error.Error(), 400)
		return
	}

	this.json(ctx, nil, facade.Lang(ctx, "注册成功！"), 200)
}

// 上锁
func (this *Install) lock(ctx *gin.Context) {
	utils.File().Remove("install.lock")
	this.json(ctx, nil, facade.Lang(ctx, "成功！"), 200)
}

// 安装锁状态
func (this *Install) isInstall() bool {
	return !utils.File().Exist("install.lock")
}
