const {
    isIdValid,
    handleError,
    errorObject
  } = require('../../middlewares/utils')
  const { matchedData } = require('express-validator')
  const { checkPassword } = require('../../middlewares/auth')
  const { findUser, changePasswordInDB } = require('./helpers')
  
  /**
   * Change password function called by route
   * @param {Object} req - request object
   * @param {Object} res - response object
   */
  const changePassword = async (req, res) => {
    try {
      const id = await isIdValid(req.user._id)
      const user = await findUser(id)
      req = matchedData(req)
      const isPasswordMatch = await checkPassword(req.oldPassword, user)
      if (!isPasswordMatch) {
        return handleError(res, errorObject(409, 'WRONG_PASSWORD'))
      } else {
        // all ok, proceed to change password
        res.status(200).json(await changePasswordInDB(id, req))
      }
    } catch (error) {
      handleError(res, error)
    }
  }
  
  module.exports = { changePassword }