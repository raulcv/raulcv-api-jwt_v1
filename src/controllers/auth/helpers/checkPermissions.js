const User = require('../../../models/user')
const { itemNotFound, errorObject } = require('../../../middlewares/utils')
const { getRoleById } = require('./getRoleById')
/**
 * Checks against user if has quested role
 * @param {Object} data - data object
 * @param {*} next - next callback
 */
const checkPermissions = ({ id = '', roleId = '', rolesAuthorized = [] }, next) => {
  return new Promise((resolve, reject) => {
    User.findById({ _id: id }, async (err, result) => {
      try {
        // console.log('**************************** USER ID')
        // console.log(id)
        // console.log('**************************** USER result')
        // console.log(result)
        await itemNotFound(err, result, 'USER_NOT_FOUND')
        // console.log('**************************** ROLE ID')
        // console.log(roleId)
        const objResultRole = await getRoleById(roleId)
        // console.log('**************************** objROLE get')
        // console.log(objResultRole)
        if (rolesAuthorized.indexOf(objResultRole.name) > -1) {
          return resolve(next())
        }
        reject(errorObject(401, 'UNAUTHORIZED'))
      } catch (error) {
        console.log('error Check Permissions ROLE')
        reject(error)
      }
    })
  })
}

module.exports = { checkPermissions }