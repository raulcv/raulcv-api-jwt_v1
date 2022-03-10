const Role = require('../../../models/role')
const { errorObject } = require('../../../middlewares/utils')

/**
 * Checks if a role exists in database by name of role
 * @param {string} name - name of item
 */
const getRoleByName = (name = '') => {
  return new Promise((resolve, reject) => {
    Role.findOne({ name }, (err, item) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }
      resolve(item)
    }
    )
  })
}

module.exports = { getRoleByName }