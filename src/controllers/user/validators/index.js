const { validateRole } = require('./validateRole')
const { validateCreateUser } = require('./validateCreateUser')
const { validateUpdateUser } = require('./validateUpdateUser')
const { validateDeleteUser } = require('./validateDeleteUser')
const { validateGetUser } = require('./validateGetUser')


module.exports = { 
    validateRole,
    validateCreateUser,
    validateUpdateUser,
    validateDeleteUser,
    validateGetUser
}