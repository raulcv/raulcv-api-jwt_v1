const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')

/**
 * Validates update item request
 */
const validateUpdateRoleState = [
  check('state')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateUpdateRoleState }