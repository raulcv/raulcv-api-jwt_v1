const { matchedData } = require('express-validator')
const { registerUser, setUserInfomation, returnRegisterToken, getRoleByName } = require('./helpers')
const { handleError } = require('../../middlewares/utils')
const { emailExists, sendRegistrationEmailMessage } = require('../../middlewares/emailer')

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const register = async (req, res) => {
    try {
        // Gets locale from header 'Accept-Language'
        const locale = req.getLocale()
        const requestDataObject = matchedData(req)
        let roleName = 'public'
        let objRole = await getRoleByName(roleName)
        let roleId = ''
        if (objRole) {
            roleId = objRole._id;
            requestDataObject.roles = roleId
        }
        const doesEmailExists = await emailExists(requestDataObject.email)
        if (!doesEmailExists) {
            const item = await registerUser(requestDataObject)
            // console.log('**************************** ITEM USER REGISTER')
            // console.log(item)
            const userInfo = await setUserInfomation(item)
            const response = await returnRegisterToken(item, roleId , userInfo)
            sendRegistrationEmailMessage(locale, item)
            res.status(201).json(response)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { register }