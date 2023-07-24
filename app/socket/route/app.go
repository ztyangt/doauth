package route

import (
	"doauth/app/socket/controller"
	"doauth/app/socket/middleware"
	"github.com/gin-gonic/gin"
)

func Route(engine *gin.Engine) {
	socket := engine.Group("/socket", middleware.App)
	{
		class := controller.Index{}
		socket.GET("", class.Connect)
		socket.GET("/", class.Connect)
	}
}
