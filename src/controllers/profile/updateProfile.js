const { isIdValid, handleError } = require('../../middlewares/utils')
const { matchedData } = require('express-validator')
const { updateProfileInDB } = require('./helpers')

/**
 * Update profile function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateProfile = async (req, res) => {
  try {
    const id = await isIdValid(req.user._id)
    req = matchedData(req)
    res.status(200).json(await updateProfileInDB(req, id))
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateProfile }