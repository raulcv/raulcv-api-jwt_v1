const User = require('../../../models/user')
const { itemNotFound } = require('../../../middlewares/utils')

/**
 * Checks if verification id exists for user
 * @param {string} id - verification id
 */
const verificationExists = (id = '') => {
    return new Promise((resolve, reject) => {
        let objParamToFind = { verification: id, verified: false }
        User.findOne(objParamToFind, async (err, user) => {
            try {
                await itemNotFound(err, user, 'NOT_FOUND_OR_ALREADY_VERIFIED')
                resolve(user)
            } catch (error) {
                reject(error)
            }
        }
        )
    })
}

module.exports = { verificationExists }