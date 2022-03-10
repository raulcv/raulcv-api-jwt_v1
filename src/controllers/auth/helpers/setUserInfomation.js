/**
 * Creates an object with user info
 * @param {Object} req - request object
 */
const setUserInfomation = (req = {}) => {
    return new Promise((resolve) => {
        let user = {
            _id: req._id,
            name: req.name,
            email: req.email,
            roles: req.roles,
            verified: req.verified
        }
        // Adds verification for testing purposes
        if (process.env.NODE_ENV !== 'prod') {
            user = { ...user, verification: req.verification }
        }
        resolve(user)
    })
}

module.exports = { setUserInfomation }