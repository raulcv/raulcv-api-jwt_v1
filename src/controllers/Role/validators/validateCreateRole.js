const { validateResult } = require('../../../middlewares/utils')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
const validateCreateRole = [
    check('name')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY')
        .isLength({ min: 4 })
        .withMessage('ROLE_NAME_TOO_SHORT_MIN_4')
        .trim(),
    check('description'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateRole }