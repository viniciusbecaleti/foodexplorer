const AppError = require("../utils/AppError")
const { v4: uuid } = require("uuid")
const knex = require("../database/knex")

class CategoriesController {
  async index(req, res) {
    const categories = await knex("categories").select("*")
    return res.json(categories)
  }

  async create(req, res) {
    const { name } = req.body

    if (!name) {
      throw new AppError("Name is required")
    }

    const nameAlreadyExists = await knex("categories").where({ name }).first()

    if (nameAlreadyExists) {
      throw new AppError("Category already exists")
    }

    const category = {
      id: uuid(),
      name
    }

    await knex("categories").insert(category)
    
    res.sendStatus(201)
  }
}

module.exports = CategoriesController