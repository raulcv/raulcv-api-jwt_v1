const { errorObject } = require('../../../middlewares/utils')
/**
 * Verifies an user
 * @param {Object} user - user object
 */
const verifyUser = (user = {}) => {
    return new Promise((resolve, reject) => {
        user.verified = true
        user.save((err, item) => {
            if (err) {
                let objError = errorObject(422, err.message)
                return reject(objError)
            }
            let objReturn = { email: item.email, verified: item.verified }
            resolve(objReturn)
        })
    })
}

module.exports = { verifyUser }