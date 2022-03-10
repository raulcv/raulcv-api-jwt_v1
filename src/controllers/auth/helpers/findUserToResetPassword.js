const User = require('../../../models/user')
const { itemNotFound } = require('../../../middlewares/utils')

/**
 * Finds user by email to reset password
 * @param {string} email - user email
 */
const findUserToResetPassword = (email = '') => {
    return new Promise((resolve, reject) => {
        let query = { email }
        User.findOne(query, async (err, user) => {
            try {
                await itemNotFound(err, user, 'NOT_FOUND')
                resolve(user)
            } catch (error) {
                reject(error)
            }
        })
    })
}

module.exports = { findUserToResetPassword }