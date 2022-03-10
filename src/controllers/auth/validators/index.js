const { validateRegister } = require('./validateRegister')
const { validateLogin } = require('./validateLogin')
const { validateVerify } = require('./validateVerify')
const { validateForgotPassword } = require('./validateForgotPassword')
const { validateResetPassword } = require('./validateResetPassword')

module.exports = { 
    validateRegister,
    validateLogin,
    validateVerify,
    validateForgotPassword,
    validateResetPassword
}