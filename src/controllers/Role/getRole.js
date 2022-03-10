const { matchedData } = require('express-validator')
const Role = require('../../models/role')
const { getItem } = require('../../middlewares/database')
const { isIdValid, handleError } = require('../../middlewares/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getRole = async (req, res) => {
  try {
    const requestDataObject = matchedData(req)
    const id = await isIdValid(requestDataObject.id)
    const role = await getItem(id, Role)
    res.status(200).json(role)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getRole }