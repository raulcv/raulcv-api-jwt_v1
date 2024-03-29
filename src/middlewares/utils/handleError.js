/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
const handleError = (res = {}, err = {}) => {
    // Prints error in console
    if (process.env.NODE_ENV === 'dev') {
        console.log(err)
    }
    // Sends error to user
    res.status(err.code).json({ statusCode: err.code,
        errors: { msg: err.message }
    })
}

module.exports = { handleError }