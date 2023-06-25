const AppError = require("../utils/AppError")
const validateEmail = require("../utils/validateEmail")
const { hash } = require("bcrypt")
const knex = require("../database/knex")
const { v4: uuidv4 } = require("uuid")

class UsersController {
  async index(req, res) {
    const { admin } = req.user

    if (!admin) {
      throw new AppError("Unauthorized", 401)
    }

    const users = await knex("users").select("*")

    return res.json(users)
  }

  async show(req, res) {
    const { user_id } = req.params
    const { id, admin } = req.user

    if (user_id === id) {
      const user = await knex("users").select("*").where({ id: user_id }).first()
      return res.json(user)
    }

    if (!admin) {
      throw new AppError("Unauthorized", 401)
    }

    const user = await knex("users").select("*").where({ id: user_id }).first()

    if (!user) {
      throw new AppError("User not found")
    }

    return res.json(user)
  }

  async create(req, res) {
    const { name, email, password } = req.body

    if (!name) {
      throw new AppError("Name is required")
    }

    if (!email) {
      throw new AppError("Email is required")
    }

    const isValidEmail = validateEmail(email)

    if (!isValidEmail) {
      throw new AppError("Invalid email")
    }

    const emailAlreadyExists = await knex("users").select("*").where({ email }).first()

    if (emailAlreadyExists) {
      throw new AppError("Email already exists")
    }

    if (!password) {
      throw new AppError("Password is required")
    }

    const hashedPassword = await hash(password, 10)

    const user = {
      id: uuidv4(),
      name,
      email: email.toLowerCase(),
      password: hashedPassword
    }

    await knex("users").insert(user)

    return res.sendStatus(201)
  }

  async delete(req, res) {
    const { user_id } = req.params
    const { id, admin } = req.user

    const user = await knex("users").select("*").where({ id: user_id }).first()

    if (!user) {
      throw new AppError("User not found")
    }

    if (user_id === id) {
      await knex("users").where({ id }).delete()
      return res.sendStatus(200)
    }

    if (!admin) {
      throw new AppError("Unauthorized", 401)
    }

    await knex("users").where({ id: user_id }).delete()

    return res.sendStatus(200)
  }
}

module.exports = UsersController