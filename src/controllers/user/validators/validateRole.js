const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')

/**
 * Validates update item request
 */
const validateRole = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('role')
    .exists()
    .withMessage('Missing')
    .not()
    .notEmpty()
    .withMessage('Is Empty'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateRole }