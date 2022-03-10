const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateGetRole = [
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

module.exports = { validateGetRole }