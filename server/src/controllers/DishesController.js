const AppError = require("../utils/AppError")
const { v4: uuid } = require("uuid")
const knex = require("../database/knex")

class DishesController {
  async index(req, res) {
    const { q } = req.query

    await knex.transaction(async trx => {
      const dishes = await trx("dishes")
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

      const ingredients = await trx("ingredients").select("*")

      const dishesWithIngredients = filteredDishes.map(dish => {
        return {
          ...dish,
          ingredients: ingredients.filter(ingredient => ingredient.dish_id === dish.id)
        }
      })

      const dishesByCategory = dishesWithIngredients.reduce((categoriesWithDishes, current) => {
        if (!categoriesWithDishes.find(item => item.category_name === current.category_name)) {
          categoriesWithDishes.push({ category_name: current.category_name, dishes: [current] })
        } else {
          const index = categoriesWithDishes.findIndex(item => item.category_name === current.category_name)
          categoriesWithDishes[index].dishes.push(current)
        }

        return categoriesWithDishes
      }, [])

      return res.json(dishesByCategory)
    })
  }

  async show(req, res) {
    const { dish_id } = req.params

    await knex.transaction(async trx => {
      const dish = await trx("dishes").select("*").where({ id: dish_id }).first()
      const ingredients = await trx("ingredients").select("*").where({ dish_id })

      return res.json({
        ...dish, ingredients
      })
    })

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
      throw new AppError("Category ID is required")
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

      res.status(201).json({ dish_id: dish.id })
    })
  }

  async delete(req, res) {
    const { dish_id } = req.body

    await knex("dishes").where({ id: dish_id }).del()

    res.sendStatus(200)
  }
}

module.exports = DishesController
