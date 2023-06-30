const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

const allowedType = [
  "image/png",
  "image/jpeg"
]

class DishImageController {
  async update(req, res) {
    const { mimetype, filename } = req.file
    const { dish_id } = req.query
    const diskStorage = new DiskStorage()

    if (!allowedType.includes(mimetype)) {
      await diskStorage.deleteTmpFile(filename)
      throw new AppError("File type not allowed", 415)
    }

    if (!dish_id) {
      throw new AppError("Dish ID is required", 400)
    }

    const dish = await knex("dishes").select("*").where({ id: dish_id }).first()

    if (!dish) {
      throw new AppError("Dish not found", 404)
    }

    if (dish.image) {
      await diskStorage.deleteFile(dish.image)
    }

    await diskStorage.saveFile(filename)

    await knex("dishes").update({ image: filename }).where({ id: dish_id })

    res.sendStatus(200)
  }
}

module.exports = DishImageController
