const { roleAuthorization } = require('./roleAuthorization')
const { register } = require('./register')
const { getRefreshToken } = require('./getRefreshToken')
const { login } = require('./login')
const { verify } = require('./verify')
const { forgotPassword } = require('./forgotPassword')
const { resetPassword } = require('./resetPassword')

module.exports = {
    roleAuthorization,
    register,
    getRefreshToken,
    login,
    verify,
    forgotPassword,
    resetPassword
}