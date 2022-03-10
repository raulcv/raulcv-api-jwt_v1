const { saveItem, getItem } = require('../../middlewares/database')
const { isIdValid, handleError } = require('../../middlewares/utils')
const { matchedData } = require('express-validator')
const { userHasRole } = require('./helpers')
const User = require('../../models/user')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const addRole = async (req, res) => {
    try {
        const requestDataObject = matchedData(req)
        const id = await isIdValid(requestDataObject.id)
        const userHasRoleAlready = await userHasRole(id, requestDataObject.role)
        if (!userHasRoleAlready) {
            const itemfound = await getItem(id, User)
            // console.log('**************************** ITEM FOUND')
            // console.log(itemfound)
            // console.log('**************************** ITEM FOUND MODIFIED')
            itemfound.roles.push(requestDataObject.role)
            // console.log(itemfound)
            const userModified = await saveItem(itemfound)
            // const userModified = requestDataObject;
            res.status(200).json(userModified)
        }
        // res.status(200).json({ mensaje: userHasRoleAlready })
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { addRole }