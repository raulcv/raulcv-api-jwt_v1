const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIdValid, handleError } = require('../../middlewares/utils')
const { getItem } = require('../../middlewares/database')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getUser = async (req, res) => {
  try {
    let objRequest = matchedData(req)
    let id = await isIdValid(objRequest.id)
    res.status(200).json(await getItem(id, User))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getUser }