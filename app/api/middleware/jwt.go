package middleware

import (
	"doauth/app/facade"
	"doauth/app/model"
	"github.com/gin-gonic/gin"
	"github.com/spf13/cast"
	"github.com/unti-io/go-utils/utils"
)

// Jwt - JWT 中间件
func Jwt() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		tokenName := cast.ToString(facade.AppToml.Get("app.token_name", "UNTI_LOGIN_TOKEN"))

		var token string
		if !utils.Is.Empty(ctx.Request.Header.Get("Authorization")) {
			token = ctx.Request.Header.Get("Authorization")
		} else {
			token, _ = ctx.Cookie(tokenName)
		}

		// 为空直接跳过
		if utils.Is.Empty(token) {
			ctx.Next()
			return
		}

		result := gin.H{"code": 401, "msg": facade.Lang(ctx, "禁止非法操作！"), "data": nil}

		jwt := facade.Jwt().Parse(token)
		if jwt.Error != nil {
			result["msg"] = utils.Ternary(jwt.Valid == 0, facade.Lang(ctx, "登录已过期，请重新登录！"), jwt.Error.Error())
			ctx.SetCookie(tokenName, "", -1, "/", "", false, false)
			ctx.JSON(200, result)
			ctx.Abort()
			return
		}

		user := facade.DB.Model(&model.Users{}).Find(jwt.Data["uid"])

		// 密码发生变化 - 强制退出
		if jwt.Data["hash"] != facade.Hash.Sum32(user["password"]) {
			result["msg"] = facade.Lang(ctx, "登录已过期，请重新登录！")
			ctx.SetCookie(tokenName, "", -1, "/", "", false, false)
			ctx.JSON(200, result)
			ctx.Abort()
			return
		}

		ctx.Set("user", user)

		ctx.Next()
	}
}
