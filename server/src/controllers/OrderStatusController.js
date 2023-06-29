const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { v4: uuid } = require("uuid")

class OrderStatusController {
  async create(req, res) {
    const { name } = req.body

    if (!name) {
      throw new AppError("Name is required")
    }

    const orderStatusAlreadyExists = await knex("order_status").select("*").where({ name }).first()

    if (orderStatusAlreadyExists) {
      throw new AppError("Order status already exists")
    }

    const orderStatus = {
      id: uuid(),
      name
    }

    await knex("order_status").insert(orderStatus)

    res.sendStatus(201)
  }
}

module.exports = OrderStatusController