const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")
const knex = require("../database/knex")
const { compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body

    if (!email) {
      throw new AppError("Please enter your email address")
    }

    const user = await knex("users").select("*").where({ email }).first()

    if (!user) {
      throw new AppError("Email address or password is invalid")
    }

    if (!password) {
      throw new AppError("Please enter your password")
    }

    const matchedPassword = await compare(password, user.password)

    if (!matchedPassword) {
      throw new AppError("Email address or password is invalid")
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin
      }
    }, secret, {
      expiresIn
    })

    return res.status(201).json({ token })
  }
}

module.exports = SessionsController