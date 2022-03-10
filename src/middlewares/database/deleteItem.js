const { successObject, itemNotFound } = require('../../middlewares/utils')

/**
 * Deletes an item from database by id
 * @param {string} id - id of item
 */
const deleteItem = (id = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndRemove(id, async (err, item) => {
      try {
        await itemNotFound(err, item, 'NOT_FOUND')
        resolve(successObject('It was deleted'))
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { deleteItem }