const AppError = require("../utils/AppError")

function ensureAdmin(req, res, next) {
  const { admin } = req.user

  if (!admin) {
    throw new AppError("Unauthorized", 401)
  }

  next()
}

module.exports = ensureAdmin