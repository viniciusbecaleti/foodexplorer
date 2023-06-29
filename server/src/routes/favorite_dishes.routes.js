const { Router } = require("express")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const FavoriteDishesController = require("../controllers/FavoriteDishesController")

const favoriteDishesRoutes = Router()
const favoriteDishesController = new FavoriteDishesController()

favoriteDishesRoutes.get("/", ensureAuthentication, favoriteDishesController.index)
favoriteDishesRoutes.post("/", ensureAuthentication, favoriteDishesController.create)
favoriteDishesRoutes.delete("/", ensureAuthentication, favoriteDishesController.delete)

module.exports = favoriteDishesRoutes