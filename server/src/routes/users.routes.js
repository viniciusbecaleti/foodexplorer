const { Router } = require("express")
const ensureAuthentication = require("../middlewares/ensureAuthentication")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()
const usersController = new UsersController()

usersRoutes.get("/", ensureAuthentication, usersController.index)
usersRoutes.get("/:user_id", ensureAuthentication, usersController.show)
usersRoutes.post("/", usersController.create)
usersRoutes.delete("/:user_id", ensureAuthentication, usersController.delete)

module.exports = usersRoutes