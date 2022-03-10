const { errorObject } = require('../../middlewares/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object lile { name: "Juanito"}
 */
const createItem = (req = {}, model = {}) => {
  return new Promise((resolve, reject) => {
    model.create(req, (err, item) => {
      if (err) {
        reject(errorObject(422, err.message))
      }
      resolve(item)
    })
  })
}

module.exports = { createItem }