const uuid = require('uuid')
const User = require('../../../models/user')
const { errorObject } = require('../../../middlewares/utils')

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const registerUser = (req = {}) => {
    return new Promise((resolve, reject) => {
        // console.log(req)
        const user = new User({
            name: req.name,
            // lastname: req.lastname,
            // username: req.username,
            email: req.email,
            password: req.password,
            roles: req.roles,
            verification: uuid.v4() //Creating random UUID for verification after register
        })

        user.save((err, item) => {
            if (err) {
                reject(errorObject(422, err.message))
            }
            resolve(item)
        })
    })
}

module.exports = { registerUser }