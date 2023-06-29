const { Router } = require("express")
const OrderStatusController = require("../controllers/OrderStatusController")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const ensureAdmin = require("../middlewares/ensureAdmin")

const orderStatusRoutes = new Router()
const orderStatusController = new OrderStatusController()

orderStatusRoutes.post("/", ensureAuthentication, ensureAdmin, orderStatusController.create)

module.exports = orderStatusRoutes