const { Router } = require("express")
const OrdersController = require("../controllers/OrdersController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")

const ordersRoutes = new Router()
const ordersController = new OrdersController()

ordersRoutes.get("/", ensureAuthentication, ordersController.index)
ordersRoutes.post("/", ensureAuthentication, ordersController.create)

module.exports = ordersRoutes
