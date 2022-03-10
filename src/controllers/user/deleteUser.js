const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIdValid, handleError } = require('../../middlewares/utils')
const { deleteItem } = require('../../middlewares/database')

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteUser = async (req, res) => {
  try {
    let objRequest = matchedData(req)
    const id = await isIdValid(objRequest.id)
    res.status(200).json(await deleteItem(id, User))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { deleteUser }