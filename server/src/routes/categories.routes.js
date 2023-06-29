const { Router } = require("express")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const ensureAdmin = require("../middlewares/ensureAdmin")
const CategoriesController = require("../controllers/CategoriesController")

const categoriesRoutes = Router()
const categoriesController = new CategoriesController()

categoriesRoutes.get("/", ensureAuthentication, ensureAdmin, categoriesController.index)
categoriesRoutes.post("/", ensureAuthentication, ensureAdmin, categoriesController.create)

module.exports = categoriesRoutes