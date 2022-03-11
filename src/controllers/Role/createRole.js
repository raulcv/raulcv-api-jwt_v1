const Role = require('../../models/role')
const { createItem } = require('../../middlewares/database')
const { handleError } = require('../../middlewares/utils')
const { matchedData } = require('express-validator')
const { roleExists } = require('./helpers')
/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createRole = async (req, res) => {
  try {
    const requestDataObject = matchedData(req, { includeOptionals: false })
    requestDataObject.description = req.body.description || requestDataObject.name
    let countRole = await Role.countDocuments({});
    requestDataObject.sequence = countRole + 1;
    const doesRoleExists = await roleExists(requestDataObject.name)
    if (!doesRoleExists) {
      const roleCreated = await createItem(requestDataObject, Role)
      res.status(201).json(roleCreated)
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createRole }