const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', { session: false })
const trimRequest = require('trim-request')

const { roleAuthorization } = require('../controllers/auth')

const { createUser, updateUser, deleteUser, getUsers, getUser,
    addRole, removeRole } = require('../controllers/user')
const { validateCreateUser, validateUpdateUser, validateDeleteUser, validateGetUser,
    validateRole } = require('../controllers/user/validators')

/*
 * Users routes
 */

/*
 * Get items route
 */
router.get('/', requireAuth, roleAuthorization(['admin']), trimRequest.all, getUsers)

/*
 * Create new item route
 */
router.post('/', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateCreateUser, createUser)

/*
 * Get item route
 */
router.get('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateGetUser, getUser)

/*
 * Update item route
 */
router.patch('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateUpdateUser, updateUser)

/*
 * Delete item route
 */
router.delete('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateDeleteUser, deleteUser)

/*
 * Add new Role for User
 */
router.patch('/addRole/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateRole, addRole)

/*
 * remove new Role for User
 */
router.patch('/removeRole/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateRole, removeRole)


module.exports = router