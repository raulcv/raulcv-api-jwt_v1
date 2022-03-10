const jwt = require('jsonwebtoken')
const { errorObject } = require('../../../middlewares/utils')
const { decrypt } = require('../../../middlewares/auth')

/**
 * Gets user id from token
 * @param {string} token - Encrypted and encoded token
 */
const getUserDataFromToken = (token = '') => {
  return new Promise((resolve, reject) => {
    // Decrypts, verifies and decode token
    const stringDesencryptedToken = decrypt(token)
    jwt.verify(stringDesencryptedToken, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(errorObject(409, 'BAD_TOKEN'))
      }
      resolve(decoded.data)
    })
  })
}

module.exports = { getUserDataFromToken }