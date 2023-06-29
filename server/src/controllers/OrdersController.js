const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const { v4: uuid } = require("uuid")

class OrdersController {
  async index(req, res) {
    const { id: user_id } = req.user

    await knex.transaction(async trx => {
      const orders = await trx("orders")
        .select([
          "orders.id",
          "orders.code",
          "order_status.name AS status_name",
          "orders.created_at",
          "orders.updated_at",
        ])
        .innerJoin("order_status", "orders.status_id", "=", "order_status.id")
        .where({ user_id })

      let ordersWithDishes = []
      for (const order of orders) {
        const dishes = await trx("orders_dishes")
          .select([
            "dishes.name",
            "categories.name As category_name",
            "orders_dishes.quantity"
          ])
          .innerJoin("dishes", "orders_dishes.dish_id", "=", "dishes.id")
          .innerJoin("categories", "dishes.category_id", "=", "categories.id")
          .where({ order_id: order.id })

        ordersWithDishes.push({
          ...order,
          dishes
        })
      }

      res.json(ordersWithDishes)
    })

  }

  async create(req, res) {
    const { id: user_id } = req.user
    const { dishes } = req.body

    if (!dishes || !dishes.length) {
      throw new AppError("Dishes are required")
    }

    for (const dish of dishes) {
      const { dish_id, quantity } = dish

      if (!dish_id || !quantity) {
        throw new AppError("One or more objects with dish ID and quantity is required")
      }
    }

    await knex.transaction(async trx => {
      const { id: status_id } = await trx("order_status").select("id").where({ name: "Pendente" }).first()

      if (!status_id) {
        throw new AppError("Order status not found", 404)
      }

      const order = {
        id: uuid(),
        status_id,
        user_id,
      }

      await trx("orders").insert(order)

      for (const dish of dishes) {
        const { dish_id, quantity } = dish

        const dishExists = await trx("dishes").select("*").where({ id: dish_id }).first()

        if (!dishExists) {
          throw new AppError("One or more dishes do not exist")
        }

        const dishAlreadyAdded = await trx("orders_dishes")
          .select("*")
          .where({ order_id: order.id, dish_id })
          .first()

        if (dishAlreadyAdded) {
          throw new AppError("Duplicate dish")
        }

        await trx("orders_dishes").insert({
          id: uuid(),
          order_id: order.id,
          dish_id,
          quantity
        })
      }

      res.sendStatus(201)
    })
  }
}

module.exports = OrdersController
