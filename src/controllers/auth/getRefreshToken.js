const { getUserDataFromToken, findUserById, saveUserAccessAndReturnToken } = require('./helpers')
const { isIdValid, handleError } = require('../../middlewares/utils')

/**
 * Refresh token function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getRefreshToken = async (req, res) => {
    try {
        const tokenEncrypted = req.headers.authorization
            .replace('Bearer ', '')
            .trim()
        let userData = await getUserDataFromToken(tokenEncrypted)
        let userId = await isIdValid(userData._id)
        const user = await findUserById(userId)
        const objTokenAndUserInfo = await saveUserAccessAndReturnToken(req, userData.roleId, user)
        // Removes user info from response
        delete objTokenAndUserInfo.user
        res.status(200).json(objTokenAndUserInfo)
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getRefreshToken }