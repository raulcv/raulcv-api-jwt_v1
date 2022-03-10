const { saveItem, getItem } = require('../../middlewares/database')
const { isIdValid, handleError, removeItemFromArray } = require('../../middlewares/utils')
const { matchedData } = require('express-validator')
const { userHasNotRole } = require('./helpers')
const User = require('../../models/user')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const removeRole = async (req, res) => {
    try {
        const requestDataObject = matchedData(req)
        let roleId = requestDataObject.role;
        const id = await isIdValid(requestDataObject.id)
        const userfound = await getItem(id, User);
        let arrayRole = userfound.roles;
        // console.log('**************************** array role')
        // console.log(arrayRole)
        // console.log(roleId)
        const validRoleId = await isIdValid(roleId)
        // console.log(validRoleId)

        // let existsRole = arrayRole.some(r => r === validRoleId)
        // console.log(existsRole)
        const userNotHasRole = await userHasNotRole(id, roleId)

        if(!userNotHasRole) {
            // let roleIdIsEqual = (element) => element === roleId;
            // let roleIndex = arrayRole.findIndex(roleidIsEqual);
            let arrayRoleResult = removeItemFromArray(arrayRole, roleId)
            userfound.roles = arrayRoleResult
            const userModified = await saveItem(userfound)
            // const userModified = userfound;
            res.status(200).json(userModified)
        }
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { removeRole }