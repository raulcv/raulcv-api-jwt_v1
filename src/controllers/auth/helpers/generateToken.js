const jwt = require('jsonwebtoken')
const { encrypt } = require('../../../middlewares/auth')

/**
 * Generates a token
 * @param {Object} user - user object
 */
const generateToken = (user = '', roleId = '') => {
  try {
    // Gets expiration token time
    const expiration = Math.floor(Date.now() / 1000) + 60 * process.env.JWT_EXPIRATION_IN_MINUTES

    // returns signed and encrypted token
    return encrypt(
      jwt.sign(
        {
          data: { _id: user, roleId},
          exp: expiration
        },
        process.env.TOKEN_SECRET_KEY
      )
    )
  } catch (error) {
    throw error
  }
}

module.exports = { generateToken }