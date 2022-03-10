const { addHours } = require('date-fns')
const { errorObject } = require('../../../middlewares/utils')
const HOURS_TO_BLOCK = 2
/**
 * Blocks a user by setting blockExpires to the specified date based on constant HOURS_TO_BLOCK
 * @param {Object} user - user object
 */
const blockUser = (user = {}) => {
  return new Promise((resolve, reject) => {
    user.blockExpires = addHours(new Date(), HOURS_TO_BLOCK)
    user.save((err, result) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }
      if (result) {
        return resolve(errorObject(409, 'BLOCKED_USER'))
      }
    })
  })
}

module.exports = { blockUser }