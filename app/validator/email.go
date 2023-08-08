package validator

type Email struct {
	Host     string `json:"host" rule:"required"`
	Port     string `json:"port" rule:"required"`
	Account  string `json:"account" rule:"required,email"`
	Password string `json:"password" rule:"required"`
	Subject  string `json:"subject" rule:"required"`
	Nickname string `json:"nickname" rule:"required"`
	Content  string `json:"content" rule:"required"`
	Receive  string `json:"receive" rule:"required,email"`
}

var EmailMessage = map[string]string{
	"host.required":     "邮件服务器地址不能为空！",
	"port.required":     "邮件服务端口不能为空！",
	"account.required":  "发信邮件账号不能为空！",
	"account.email":     "发信邮件格式不正确！",
	"password.required": "邮件服务密码不能为空！",
	"subject.required":  "邮件主题不能为空！",
	"nickname.required": "发信昵称不能为空！",
	"content.required":  "邮件正文不能为空！",
	"receive.required":  "收信邮箱不能为空！",
	"receive.email":     "收信邮箱格式不正确！",
}

func (this Email) Message() map[string]string {
	return EmailMessage
}

func (this Email) Struct() any {
	return this
}
