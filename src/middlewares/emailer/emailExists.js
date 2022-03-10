const User = require('../../models/user')
const { errorObject } = require('../../middlewares/utils')

/**
 * Checks User model if user with an specific email exists
 * @param {string} email - user email
 */
const emailExists = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne({ email }, (err, item) => {
            if (err) {
                return reject(errorObject(422, err.message))
            }
            if (item) {
                return reject(errorObject(422, 'EMAIL_ALREADY_EXISTS'))
            }
            resolve(false)
        })
    })
}

module.exports = { emailExists }