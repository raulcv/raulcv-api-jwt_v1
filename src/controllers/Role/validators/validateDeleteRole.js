const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')

/**
 * Validates delete item request
 */
const validateDeleteRole = [
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

module.exports = { validateDeleteRole }