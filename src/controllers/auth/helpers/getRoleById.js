const Role = require('../../../models/role')
const { errorObject } = require('../../../middlewares/utils')

/**
 * Checks if a role exists in database by Id of role
 * @param {string} id - Id of item
 */
const getRoleById = (roleId = '') => {
  return new Promise((resolve, reject) => {
    Role.findById(roleId, (err, item) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }
      resolve(item)
    }
    )
  })
}

module.exports = { getRoleById }