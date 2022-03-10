/**
 * Builds success object
 * @param {string} message - success text menssage
 */
 const successObject = (message = '') => {
    return {
      msg: message
    }
  }
  
  module.exports = { successObject }