const Role = require('../../models/role')
const { matchedData } = require('express-validator')
const { isIdValid, handleError } = require('../../middlewares/utils')
const { deleteItem } = require('../../middlewares/database')

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteRole = async (req, res) => {
  try {
    const requestDataObject = matchedData(req)
    const id = await isIdValid(requestDataObject.id)
    res.status(200).json(await deleteItem(id, Role))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { deleteRole }