const Role = require('../../../models/role')
const { errorObject } = require('../../../middlewares/utils')

/**
 * Checks if a role already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item - role
 */
const roleExistsExcludingItself = (id = '', name = '') => {
  return new Promise((resolve, reject) => {
    let stringQuery = { name, _id: { $ne: id } }
    Role.findOne(stringQuery, (err, item) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }

      if (item) {
        return reject(errorObject(422, 'ROLE_ALREADY_EXISTS'))
      }

      resolve(false)
    })
  })
}

module.exports = { roleExistsExcludingItself }