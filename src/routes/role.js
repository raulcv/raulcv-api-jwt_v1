const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', { session: false })
const trimRequest = require('trim-request')
const { getRoles, getRole, createRole, updateRole, deleteRole } = require('../controllers/Role')
const { validateCreateRole, validateUpdateRole, validateUpdateRoleState,
    validateGetRole, validateDeleteRole } = require('../controllers/Role/validators')
const { roleAuthorization } = require('../controllers/auth')
/*
 * Get items route
 */
router.get('/', requireAuth, roleAuthorization(['admin']), trimRequest.all, getRoles)

/*
 * update a role by id
 */
router.get('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateGetRole, getRole)
/*
 * Create new item route
 */
router.post('/', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateCreateRole, createRole)

//TESTING CREATE NEW role
// router.post('/', trimRequest.all, validateCreateRole,(req, res) => {
//     let item = req.body;
//     const data = matchedData(req)
//     let da = { item: item, data }
//     res.status(201).json(da)
// })

/*
 * update a role
 */
router.put('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateUpdateRole, updateRole)

/*
 * update a state of role
 */
router.patch('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateUpdateRoleState, updateRole)

/*
 * delete a role by id
 */
router.delete('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateDeleteRole, deleteRole)

module.exports = router