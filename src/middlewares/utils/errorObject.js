/**
 * Builds error object
 * @param {number} code - error code
 * @param {string} message - error text
 */
const errorObject = (code = '', message = '') => {
    return { code, message }
}

module.exports = { errorObject }