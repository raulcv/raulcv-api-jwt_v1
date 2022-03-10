const { getProfileFromDB } = require('./getProfileFromDB')
const { findUser } = require('./findUser')
const { changePasswordInDB } = require('./changePasswordInDB')
const { updateProfileInDB } = require('./updateProfileInDB')

module.exports = {
    getProfileFromDB,
    findUser,
    changePasswordInDB,
    updateProfileInDB
}