const { Router } = require("express")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()
const usersController = new UsersController()

usersRoutes.get("/", ensureAuthentication, usersController.show)
usersRoutes.post("/", usersController.create)
usersRoutes.delete("/", ensureAuthentication, usersController.delete)

module.exports = usersRoutes
