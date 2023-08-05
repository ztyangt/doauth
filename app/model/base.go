package model

import (
	"doauth/app/facade"
	"github.com/jasonlvhit/gocron"
	"github.com/spf13/cast"
	"github.com/unti-io/go-utils/utils"
)

func task() {
	// 如果存在安装锁，表示还没进行初始化安装，不进行自动迁移
	if !utils.File().Exist("install.lock") {
		// 结束任务
		gocron.Remove(task)
		// 初始化数据库
		facade.WatchDB(true)
		// 检查是否开启自动迁移
		if cast.ToBool(facade.NewToml(facade.TomlDb).Get("mysql.migrate")) {
			go InitTable()
		}
	}
}

// InitTable - 初始化数据库表 - 自动迁移
func InitTable() {

	allow := []func(){
		InitUsers,
		InitConfig,
	}

	for _, val := range allow {
		go val()
	}
}

func init() {
	if err := gocron.Every(1).Second().Do(task); err != nil {
		return
	}
	// 启动调度器
	gocron.Start()
}
