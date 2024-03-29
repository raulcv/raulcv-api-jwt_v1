const User = require('../../../models/user')
const { itemNotFound } = require('../../../middlewares/utils')

/**
 * Finds user by email
 * @param {string} email - user´s email
 */
const findUser = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne({ email }, 'password loginAttempts blockExpires name email roles verified verification')
            .populate({ path: 'roles', options: { sort: { sequence: 'asc' }, limit: 1 } })
            .exec(async (err, item) => {
                try {
                    await itemNotFound(err, item, 'USER_DOES_NOT_EXIST')
                    resolve(item)
                } catch (error) {
                    reject(error)
                }
            })
    })
}

module.exports = { findUser }