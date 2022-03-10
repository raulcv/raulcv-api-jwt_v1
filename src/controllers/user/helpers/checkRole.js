const { errorObject } = require('../../../middlewares/utils')
const Role = require('../../../models/role')

/**
 * Checks if role  id good
 * @param {string} roleId role id
 * @returns {boolean}
 */
const checkRole = async (roleId = '', { req }) => {
  return new Promise((resolve, reject) => {
    Role.findById(roleId, (err, item) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }
      if (!item) {
        resolve(false)
      }
      resolve(true)
    })
  })
}

module.exports = { checkRole }