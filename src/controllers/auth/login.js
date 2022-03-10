const { matchedData } = require('express-validator')
const { findUser, userIsBlocked, checkLoginAttemptsAndBlockExpires,
    passwordsDoNotMatch, saveLoginAttemptsToDB, saveUserAccessAndReturnToken, getRoleByName } = require('./helpers')
const { handleError } = require('../../middlewares/utils')
const { checkPassword } = require('../../middlewares/auth')
/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const login = async (req, res) => {
    try {
        const objRequest = matchedData(req)
        const user = await findUser(objRequest.email)
        // console.log(user)

        await userIsBlocked(user)
        await checkLoginAttemptsAndBlockExpires(user)
        let objRole = '', roleId = '';
        if (objRequest.role) {
            let roleName = objRequest.role || 'public'
            objRole = await getRoleByName(roleName.toLowerCase())
            roleId = objRole.id;
        } else {
            roleId = await user.roles[0].id
        }
        // console.log('**************************** id: ' + objRequest.role)
        // console.log(roleId)
        const isPasswordMatch = await checkPassword(objRequest.password, user)
        if (!isPasswordMatch) {
            const objUserCondition = await passwordsDoNotMatch(user)
            handleError(res, objUserCondition)
        } else {
            // all ok, register access and return token
            user.loginAttempts = 0
            await saveLoginAttemptsToDB(user)
            const objToeknAndUserInfo = await saveUserAccessAndReturnToken(req, roleId, user)
            res.status(200).json(objToeknAndUserInfo)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { login }