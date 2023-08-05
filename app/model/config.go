package model

import (
	"doauth/app/facade"
	"gorm.io/plugin/soft_delete"
)

type Config struct {
	Id     int    `gorm:"type:int(32); comment:主键;" json:"id"`
	Key    string `gorm:"size:32; comment:键;" json:"key"`
	Value  string `gorm:"type:text; comment:值;" json:"value"`
	Remark string `gorm:"comment:备注;" json:"remark"`
	// 以下为公共字段
	Json       any                   `gorm:"type:longtext; comment:用于存储JSON数据;" json:"json"`
	Text       any                   `gorm:"type:longtext; comment:用于存储文本数据;" json:"text"`
	Result     any                   `gorm:"type:varchar(256); comment:不存储数据，用于封装返回结果;" json:"result"`
	CreateTime int64                 `gorm:"autoCreateTime; comment:创建时间;" json:"create_time"`
	UpdateTime int64                 `gorm:"autoUpdateTime; comment:更新时间;" json:"update_time"`
	DeleteTime soft_delete.DeletedAt `gorm:"comment:删除时间; default:0;" json:"delete_time"`
}

// InitConfig - 初始化Config表
func InitConfig() {
	// 迁移表
	err := facade.DB.Drive().AutoMigrate(&Config{})
	if err != nil {
		facade.Log.Error(map[string]any{"error": err}, "Config表迁移失败")
		return
	}
}
