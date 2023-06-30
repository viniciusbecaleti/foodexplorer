const { Router } = require("express")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const ensureAdmin = require("../middlewares/ensureAdmin")
const DishesController = require("../controllers/DishesController")
const DishImageController = require("../controllers/DishImageController")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const dishesRoutes = Router()
const dishesController = new DishesController()
const dishImageController = new DishImageController()
const upload = multer(uploadConfig.MULTER)

dishesRoutes.get("/", ensureAuthentication, dishesController.index)
dishesRoutes.post("/", ensureAuthentication, ensureAdmin, dishesController.create)
dishesRoutes.patch("/image", ensureAuthentication, ensureAdmin, upload.single("image"), dishImageController.update)

module.exports = dishesRoutes
