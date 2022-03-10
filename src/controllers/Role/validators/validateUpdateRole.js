const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')

/**
 * Validates update item request
 */
const validateUpdateRole = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('sequence'),
  check('description'),
  check('state'),
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

module.exports = { validateUpdateRole }