const { createUser } = require('./createUser')
const { updateUser } = require('./updateUser')
const { deleteUser } = require('./deleteUser')
const { getUsers } = require('./getUsers')
const { getUser } = require('./getUser')
const { addRole } = require('./addRole')
const { removeRole } = require('./removeRole')

module.exports = { 
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUser,
    addRole,
    removeRole
};