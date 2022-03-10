const { itemNotFound } = require('../../middlewares/utils')

/**
 * Gets item from database by id
 * @param {string} id - item id
 */
const getItem = (id = '', model = {}) => {
  return new Promise((resolve, reject) => {
    model.findById(id, async (err, item) => {
      try {
        await itemNotFound(err, item, 'Item Not Found')
        resolve(item)
      } catch (error) {
        reject(error)
      }
    })
  })
}

module.exports = { getItem }