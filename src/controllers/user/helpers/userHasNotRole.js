const { errorObject } = require('../../../middlewares/utils')
const User = require('../../../models/user')

/**
 * Checks if a role exists in database yet
 * @param {string} name - name of item
 */
const userHasNotRole = (id = '', role = '') => {
  return new Promise((resolve, reject) => {
    // let queryString = { $or: [{ _id: id }, { name: name }] }
    let queryString = { _id: id, roles: { $in: [{ _id: role }] } }
    // console.log('******************************** queryString')
    // console.log(queryString)
    //find a one User schema by id and roles    
    User.find(queryString, (err, item) => {
      if (err) {
        return reject(errorObject(422, err.message))
      }
      // console.log('**************************** USERROLE ITEM ****************************')
      // console.log(item)
      if (!item.length) {
        let objError = errorObject(422, item[0].name + ' not has ' + role + ' role yet')
        return reject(objError)
      }
      resolve(false)
    }
    )
  })
}

module.exports = { userHasNotRole }