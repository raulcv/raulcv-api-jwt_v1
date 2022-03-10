const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIdValid, handleError } = require('../../middlewares/utils')
const { updateItem } = require('../../middlewares/database')
const { emailExistsExcludingMyself } = require('../../middlewares/emailer')
// const { getRoleByName } = require('../auth/helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateUser = async (req, res) => {
  try {
    let objRequest = matchedData(req)
    const id = await isIdValid(objRequest.id)
    // let roleName = objRequest.role || 'public'
    // let objRole = await getRoleByName(roleName)
    // console.log(objRole)
    // let roleId = ''
    // if (objRole) {
    //     roleId = objRole._id;
    //     objRequest.roles = roleId
    // }
    objRequest.roles = [objRequest.role]
    const doesEmailExists = await emailExistsExcludingMyself(id, objRequest.email)
    if (!doesEmailExists) {
      res.status(200).json(await updateItem(id, User, objRequest))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateUser }