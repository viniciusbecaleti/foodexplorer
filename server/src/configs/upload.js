const path = require("node:path")
const multer = require("multer")
const { v4: uuid } = require("uuid")

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(req, file, callback) {
      const fileName = `${file.originalname}-${uuid()}`
      return callback(null, fileName)
    }
  })
}

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
}
