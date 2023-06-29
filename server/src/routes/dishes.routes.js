const { Router } = require("express")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const ensureAdmin = require("../middlewares/ensureAdmin")
const DishesController = require("../controllers/DishesController")

const dishesRoutes = Router()
const dishesController = new DishesController()

dishesRoutes.get("/", ensureAuthentication, dishesController.index)
dishesRoutes.post("/", ensureAuthentication, ensureAdmin, dishesController.create)

module.exports = dishesRoutes