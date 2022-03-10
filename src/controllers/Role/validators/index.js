const { validateCreateRole } = require('./validateCreateRole')
const { validateUpdateRole } = require('./validateUpdateRole')
const { validateUpdateRoleState } = require('./validateUpdateRoleState')
const { validateGetRole } = require('./validateGetRole')
const { validateDeleteRole } = require('./validateDeleteRole')


module.exports = { 
    validateCreateRole,
    validateUpdateRole,
    validateUpdateRoleState,
    validateGetRole,
    validateDeleteRole
}