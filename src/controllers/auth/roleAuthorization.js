const { checkPermissions } = require('./helpers')
const { handleError } = require('../../middlewares/utils')

/**
 * Roles authorization function called by route
 * @param {Array} roles - roles specified on the route
 */
const roleAuthorization = (rolesAuthorized) => async (req, res, next) => {
  try {
    const data = { id: req.user._id, roleId: req.user.roleId, rolesAuthorized }
    // console.log('**************************** data ROLE AUTHORIZATION ****************************')
    // console.log(data)
    await checkPermissions(data, next)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { roleAuthorization }