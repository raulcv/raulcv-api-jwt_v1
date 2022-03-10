const { matchedData } = require('express-validator')
const { verificationExists, verifyUser } = require('./helpers')

const { handleError } = require('../../middlewares/utils')

/**
 * Verify function called by route - It save like verified if user is not verified yet
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const verify = async (req, res) => {
  try {
    const requestDataObject = matchedData(req)
    const user = await verificationExists(requestDataObject.id)
    let objUserEmailAndVerification = await verifyUser(user);
    res.status(200).json(objUserEmailAndVerification)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { verify }