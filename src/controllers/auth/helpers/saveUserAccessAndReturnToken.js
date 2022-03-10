const UserAccess = require('../../../models/userAccess')
const { setUserInfo } = require('./setUserInfo')
const { generateToken } = require('./generateToken')
const { getIP, getBrowserInfo, getCountry, errorObject } = require('../../../middlewares/utils')

/**
 * Saves a new user access and then returns token
 * @param {Object} req - request object
 * @param {Object} user - user object
 */
const saveUserAccessAndReturnToken = (req = {}, roleId='', user = {}) => {
    return new Promise((resolve, reject) => {
        const userAccess = new UserAccess({
            email: user.email,
            ip: getIP(req),
            browser: getBrowserInfo(req),
            country: getCountry(req)
        })
        userAccess.save(async (err) => {
            try {
                if (err) {
                    return reject(errorObject(422, err.message))
                }
                const userInfo = await setUserInfo(user)
                // Returns data with access token
                const stringEncryptedToken = generateToken(user._id, roleId)
                const objTokenAndUserInfo = { token: stringEncryptedToken, user: userInfo }
                resolve(objTokenAndUserInfo)
            } catch (error) {
                reject(error)
            }
        })
    })
}

module.exports = { saveUserAccessAndReturnToken }