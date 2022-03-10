const mongoose = require('mongoose')
const { errorObject } = require('./errorObject')

/**
 * Checks if given ID is good for MongoDB
 * @param {string} id - id to check
 */
const isIdValid = async (id = '') => {
  return new Promise((resolve, reject) => {
    // console.log(id)
    const goodID = mongoose.Types.ObjectId.isValid(id)
    return goodID ? resolve(id) : reject(errorObject(422, "Id is not a valid"));
  })
}

module.exports = { isIdValid }