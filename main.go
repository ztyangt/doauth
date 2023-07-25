package main

import (
	api "doauth/app/api/route"
	dev "doauth/app/dev/route"
	index "doauth/app/index/route"
	"doauth/app/middleware"
	socket "doauth/app/socket/route"
	app "doauth/config"
	"fmt"
	"github.com/fsnotify/fsnotify"
)

func main() {

	// 监听服务
	watch()
	// 运行服务
	run()

	// 静默运行 - 不显示控制台
	// go build -ldflags -H=windowsgui 或 bee pack -ba="-ldflags -H=windowsgui"
	// 压缩二进制包 - https://github.com/upx/upx/releases
	// upx -9 -o doauth unti
}

func run() {
	// 允许跨域
	app.Gin.Use(middleware.Cors(), middleware.Install())
	// 注册路由
	app.Use(api.Route, dev.Route, index.Route, socket.Route)
	// 运行服务
	app.Run()
}

// 监听配置文件变化
func watch() {

	app.AppToml.Viper.WatchConfig()
	// 配置文件变化时，重新初始化配置文件
	app.AppToml.Viper.OnConfigChange(func(event fsnotify.Event) {

		// 关闭服务
		if app.Server != nil {
			// 关闭服务
			err := app.Server.Shutdown(nil)
			if err != nil {
				fmt.Println("关闭服务发生错误: ", err)
				return
			}
		}

		watch()
		// 重新初始化驱动
		app.InitApp()
		// 重新运行服务
		run()
	})
}
