package validator

type Install struct {
	Hostname string `json:"hostname" rule:"required"`
	Hostport string `json:"hostport" rule:"required"`
	Database string `json:"database" rule:"required,alphaDash"`
	Username string `json:"username" rule:"required,alphaDash"`
	Password string `json:"password" rule:"required,min=6,max=18"`
	Prefix   string `json:"prefix" rule:"required,alpha"`
}

var InstallMessage = map[string]string{
	"hostname.required":  "数据库地址不能为空！",
	"hostport.required":  "数据库端口不能为空！",
	"database.required":  "数据库名不能为空！",
	"username.required":  "数据库用户名不能为空！",
	"password.min":       "数据库密码不能少于6位！",
	"password.max":       "数据库密码不能多于18位！",
	"password.required":  "数据库密码不能为空！",
	"prefix.required":    "数据表前缀不能为空！",
	"database.alpha":     "数据表前缀只能为字母！",
	"database.alphaDash": "数据库名只能包含字母、数字和下划线！",
	"username.alphaDash": "数据库用户名只能包含字母、数字和下划线！",
}

func (this Install) Message() map[string]string {
	return InstallMessage
}

func (this Install) Struct() any {
	return this
}
