const { checkPermissions } = require('./checkPermissions');
const { registerUser } = require('./registerUser');
const { setUserInfomation } = require('./setUserInfomation');
const { returnRegisterToken } = require('./returnRegisterToken');
const { getUserDataFromToken } = require('./getUserDataFromToken');
const { findUserById } = require('./findUserById');
const { saveUserAccessAndReturnToken } = require('./saveUserAccessAndReturnToken');
const { findUser } = require('./findUser');
const { userIsBlocked } = require('./userIsBlocked');
const { checkLoginAttemptsAndBlockExpires } = require('./checkLoginAttemptsAndBlockExpires');
const { passwordsDoNotMatch } = require('./passwordsDoNotMatch');
const { saveLoginAttemptsToDB } = require('./saveLoginAttemptsToDB');
const { verificationExists } = require('./verificationExists');
const { verifyUser } = require('./verifyUser');
const { getRoleByName } = require('./getRoleByName');
const { getRoleById } = require('./getRoleById');
const { forgotPasswordResponse } = require('./forgotPasswordResponse');
const { saveForgotPassword } = require('./saveForgotPassword');
const { findForgotPassword } = require('./findForgotPassword');
const { findUserToResetPassword } = require('./findUserToResetPassword');
const { updatePassword } = require('./updatePassword');
const { markResetPasswordAsUsed } = require('./markResetPasswordAsUsed');

module.exports = {
    checkPermissions,
    registerUser,
    setUserInfomation,
    returnRegisterToken,
    getUserDataFromToken,
    findUserById,
    saveUserAccessAndReturnToken,
    findUser,
    userIsBlocked,
    checkLoginAttemptsAndBlockExpires,
    passwordsDoNotMatch,
    saveLoginAttemptsToDB,
    verificationExists,
    verifyUser,
    getRoleByName,
    getRoleById,
    forgotPasswordResponse,
    saveForgotPassword,
    findForgotPassword,
    findUserToResetPassword,
    updatePassword,
    markResetPasswordAsUsed,
}
