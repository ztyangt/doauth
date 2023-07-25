package validator

type Admin struct {
	Account  string `json:"account" rule:"required,alphaDash"`
	Nickname string `json:"nickname" rule:"required"`
	Email    string `json:"email" rule:"required,email"`
	Password string `json:"password" rule:"required,alphaDash"`
}

var AdminMessage = map[string]string{
	"account.required":   "账户不能为空！",
	"nickname.required":  "用户昵称不能为空！",
	"email.required":     "邮箱不能为空！",
	"email.email":        "邮箱格式不正确！",
	"password.required":  "密码不能为空！",
	"account.alphaDash":  "账户只能包含字母、数字和下划线！",
	"password.alphaDash": "密码只能包含字母、数字和下划线！",
}

func (this Admin) Message() map[string]string {
	return AdminMessage
}

func (this Admin) Struct() any {
	return this
}
