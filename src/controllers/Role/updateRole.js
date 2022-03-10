const Role = require('../../models/role')
const { updateItem } = require('../../middlewares/database')
const { isIdValid, handleError } = require('../../middlewares/utils')
const { matchedData } = require('express-validator')
const { roleExistsExcludingItself } = require('./helpers')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateRole = async (req, res) => {
  try {
    const requestDataObject = matchedData(req)
    const id = await isIdValid(requestDataObject.id)
    const doesRoleExists = await roleExistsExcludingItself(id, requestDataObject.name)
    if (!doesRoleExists) {
      res.status(200).json(await updateItem(id, Role, requestDataObject))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateRole }