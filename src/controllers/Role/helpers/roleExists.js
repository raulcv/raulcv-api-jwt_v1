const Role = require('../../../models/role')
const { errorObject } = require('../../../middlewares/utils')

/**
 * Checks if a role already exists in database
 * @param {string} name - name of item
 */
const roleExists = (name = '') => {
  return new Promise((resolve, reject) => {
    Role.findOne({ name }, (err, item) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }

      if (item) {
        return reject(errorObject(422, name+' ROLE_ALREADY_EXISTS'))
      }
      resolve(false)
    }
    )
  })
}

module.exports = { roleExists }