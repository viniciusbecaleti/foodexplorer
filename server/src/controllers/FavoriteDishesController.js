const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { v4: uuid } = require("uuid")

class FavoriteDishesController {
  async index(req, res) {
    const { id: user_id } = req.user

    const favoriteDishes = await knex("dishes")
    .select("dishes.*")
    .innerJoin("favorite_dishes", "dishes.id", "=", "favorite_dishes.dish_id")
    .where({ user_id })

    return res.send(favoriteDishes)
  }

  async create(req, res) {
    const { dish_id } = req.body
    const { id: user_id } = req.user

    if (!dish_id) {
      throw new AppError("Dish ID is required")
    }

    const dish = await knex("dishes").select("*").where({ id: dish_id }).first()

    if (!dish) {
      throw new AppError("Dish not found")
    }

    const dishAlreadyFavoritedByUser = await knex("favorite_dishes")
      .select("*")
      .where({ dish_id })
      .andWhere({ user_id })
      .first()

    if (dishAlreadyFavoritedByUser) {
      throw new AppError("Dish already favorited")
    }

    const favoriteDish = {
      id: uuid(),
      dish_id,
      user_id
    }

    await knex("favorite_dishes").insert(favoriteDish)

    res.sendStatus(201)
  }

  async delete(req, res) {
    const { dish_id } = req.body
    const { id: user_id } = req.user

    if (!dish_id) {
      throw new AppError("Dish ID is required")
    }

    const dish = await knex("dishes").select("*").where({ id: dish_id }).first()

    if (!dish) {
      throw new AppError("Dish not found")
    }

    const dishFavoritedByUser = await knex("favorite_dishes")
      .select("*")
      .where({ dish_id })
      .andWhere({ user_id })
      .first()

    if (!dishFavoritedByUser) {
      throw new AppError("Non-favorite dish")
    }

    await knex("favorite_dishes")
      .where({ dish_id })
      .andWhere({ user_id })
      .del()

    return res.sendStatus(200)
  }
}

module.exports = FavoriteDishesController