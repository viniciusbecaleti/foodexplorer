const { Router } = require("express")
const usersRoutes = require("./users.routes")
const sessionsRoutes = require("./sessions.routes")
const categoriesRoutes = require("./categories.routes")
const dishesRoutes = require("./dishes.routes")
const favoriteDishesRoutes = require("./favorite_dishes.routes")
const orderStatusRoutes = require("./order_status.routes")
const orders = require("./orders.routes")

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/categories", categoriesRoutes)
routes.use("/dishes", dishesRoutes)
routes.use("/favorite_dishes", favoriteDishesRoutes)
routes.use("/order_status", orderStatusRoutes)
routes.use("/orders", orders)

module.exports = routes