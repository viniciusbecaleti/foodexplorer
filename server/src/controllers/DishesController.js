const AppError = require("../utils/AppError")
const { v4: uuid } = require("uuid")
const knex = require("../database/knex")

class DishesController {
  async index(req, res) {
    const { q } = req.query

    const dishes = await knex("dishes")
      .select([
        "dishes.id",
        "dishes.image",
        "dishes.name",
        "dishes.price",
        "dishes.description",
        "categories.name AS category_name",
        "dishes.created_at",
        "dishes.updated_at"
      ])
      .innerJoin("ingredients", "dishes.id", "=", "ingredients.dish_id")
      .innerJoin("categories", "dishes.category_id", "=", "categories.id")
      .whereLike("dishes.name", `%${q}%`)
      .orWhereLike("ingredients.name", `%${q}%`)

    const filteredDishes = dishes.reduce((dishes, current) => {
      const dishExists = dishes.find(dish => dish.id === current.id)

      if (!dishExists) {
        dishes.push(current)
      }

      return dishes
    }, [])

    const ingredients = await knex("ingredients").select("*")

    const dishesWithIngredients = filteredDishes.map(dish => {
      return {
        ...dish,
        ingredients: ingredients.filter(ingredient => ingredient.dish_id === dish.id)
      }
    })

    res.json(dishesWithIngredients)
  }

  async create(req, res) {
    const {
      name,
      price,
      description,
      category_id,
      ingredients
    } = req.body

    if (!name) {
      throw new AppError("Name is required")
    }

    if (!price) {
      throw new AppError("Price is required")
    }

    if (!description) {
      throw new AppError("Description is required")
    }

    if (!category_id) {
      throw new AppError("Category_id is required")
    }

    const categoryExists = await knex("categories").where({ id: category_id }).first()

    if (!categoryExists) {
      throw new AppError("Category doesn't exist")
    }

    if (!ingredients || !ingredients.length) {
      throw new AppError("Ingredients is required")
    }

    const dish = {
      id: uuid(),
      name,
      price,
      description,
      category_id
    }

    await knex.transaction(async (trx) => {
      await trx("dishes").insert(dish)
      
      for (const ingredient of ingredients) {
        await trx("ingredients").insert({
          id: uuid(),
          name: ingredient,
          dish_id: dish.id
        })
      }
    })

    res.sendStatus(201)
  }
}

module.exports = DishesController