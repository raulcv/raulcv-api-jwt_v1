const { matchedData } = require('express-validator')
const { handleError } = require('../../middlewares/utils')
const { emailExists, sendRegistrationEmailMessage } = require('../../middlewares/emailer')
const { createItemInDb } = require('./helpers')
// const { getRoleByName } = require('../auth/helpers/getRoleByName')

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createUser = async (req, res) => {
    try {
        // Gets locale from header 'Accept-Language'
        const locale = req.getLocale()
        const objRequest = matchedData(req)
        // let roleName = 'admin'
        // let objRole = await getRoleByName(roleName)
        // let roleId = ''
        // if (objRole) {
        //     roleId = objRole._id;
        //     objRequest.roles = roleId
        // }
        const doesEmailExists = await emailExists(objRequest.email)
        if (!doesEmailExists) {
            const item = await createItemInDb(objRequest)
            sendRegistrationEmailMessage(locale, item)
            res.status(201).json(item)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { createUser }