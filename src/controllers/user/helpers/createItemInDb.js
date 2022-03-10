const uuid = require('uuid')
const User = require('../../../models/user')
const { errorObject } = require('../../../middlewares/utils')

/**
 * Creates a new item in database
 * @param {Object} req - request object
 */
const createItemInDb = ({ name = '', email = '', password = '', role = '', phone = '', city = '', country = '' }) => {
    return new Promise((resolve, reject) => {
        const user = new User({ name, email, password, roles: [role], phone, city, country, verification: uuid.v4() })
        user.save((err, item) => {
            if (err) {
                reject(errorObject(422, err.message))
            }
            item = JSON.parse(JSON.stringify(item))

            delete item.password
            delete item.blockExpires
            delete item.loginAttempts

            resolve(item)
        })
    })
}

module.exports = { createItemInDb }