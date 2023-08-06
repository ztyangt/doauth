package middleware

import (
	"doauth/app/facade"
	"github.com/gin-gonic/gin"
	"github.com/unti-io/go-utils/utils"
)

// Jwt - JWT 中间件
func Rule() gin.HandlerFunc {

	return func(ctx *gin.Context) {
		AuthRoute := []any{"/api/config/one"}

		path := ctx.Request.URL.Path

		if utils.In.Array(path, AuthRoute) {
			if utils.Is.Empty(ctx.Request.Header.Get("Authorization")) {
				ctx.JSON(401, gin.H{"code": 401, "msg": facade.Lang(ctx, "禁止非法操作！"), "data": nil})
				ctx.Abort()
				return
			}
		}

		ctx.Next()
	}
}
