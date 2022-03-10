const { itemNotFound } = require('../../middlewares/utils')

/**
 * Updates an item in database by id
 * @param {string} id - item id
 * @param {Object} req - request object
 */
const updateItem = (id = '', model = {}, req = {}) => {
    return new Promise((resolve, reject) => {
        model.findByIdAndUpdate(id, req, { new: true, runValidators: true }, async (err, item) => {
            try {
                await itemNotFound(err, item, 'Item Not Found')
                item = JSON.parse(JSON.stringify(item))

                delete item.password
                delete item.blockExpires
                delete item.loginAttempts
                resolve(item)
            } catch (error) {
                reject(error)
            }
        }
        )
    })
}

module.exports = { updateItem }