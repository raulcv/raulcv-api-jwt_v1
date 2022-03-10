const { errorObject } = require('../../../middlewares/utils')

/**
 * Saves login attempts to dabatabse
 * @param {Object} user - user object
 */
const saveLoginAttemptsToDB = (user = {}) => {
    return new Promise((resolve, reject) => {
        user.save((err, result) => {
            if (err) {
                return reject(errorObject(422, err.message))
            }
            if (result) {
                resolve(true)
            }
        })
    })
}

module.exports = { saveLoginAttemptsToDB }