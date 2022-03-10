const User = require('../../models/user')
const { errorObject } = require('../../middlewares/utils')

/**
 * Checks User model if user with an specific email exists but excluding user id
 * @param {string} id - user id
 * @param {string} email - user email
 */
const emailExistsExcludingMyself = (id = '', email = '') => {
    return new Promise((resolve, reject) => {
        let query = { email, _id: { $ne: id } }
        User.findOne(query, async (err, item) => {
            if (err) {
                return reject(errorObject(422, err.message))
            }
            if (item) {
                return reject(errorObject(422, 'EMAIL_ALREADY_EXISTS'))
            }
            resolve(false)
        }
        )
    })
}

module.exports = { emailExistsExcludingMyself }