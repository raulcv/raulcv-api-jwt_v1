const { handleError } = require('./handleError')
const { errorObject } = require('./errorObject')
const { removeExtensionFromFile } = require('./removeExtensionFromFile')
const { validateResult } = require('./validateResult')
const { itemNotFound } = require('./itemNotFound')
const { isIdValid } = require('./isIdValid')
const { successObject } = require('./successObject')
const { getIP } = require('./getIP')
const { getBrowserInfo } = require('./getBrowserInfo')
const { getCountry } = require('./getCountry')
const { removeItemFromArray } = require('./removeItemFromArray')

module.exports = {
    handleError,
    errorObject,
    removeExtensionFromFile,
    validateResult,
    itemNotFound,
    isIdValid,
    successObject,
    getIP,
    getBrowserInfo,
    getCountry,
    removeItemFromArray
}