const { generateToken } = require('./generateToken')

/**
 * Builds the registration token
 * @param {Object} item - user object that contains created id
 * @param {Object} userInfo - user object
 */
const returnRegisterToken = ({ _id = '', verification = '' }, roleId = '', userInfo = {}) => {
    return new Promise((resolve) => {
        if (process.env.NODE_ENV !== 'prod') {
            userInfo.verification = verification
        }
        const data = { token: generateToken(_id, roleId),  user: userInfo }
        resolve(data)
    })
}

module.exports = { returnRegisterToken }