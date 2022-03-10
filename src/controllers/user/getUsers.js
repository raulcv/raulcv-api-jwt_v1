const User = require('../../models/user');
const { handleError } = require('../../middlewares/utils')
const { getItems, checkQueryString } = require('../../middlewares/database');

const getUsers = async (req, res) => {
    try {
        const query = await checkQueryString(req.query);
        const users = await getItems(req, User, query);
        res.status(200).json(users);
    } catch (err) {
        console.log('Get User catch error')
        handleError(res, err);
    }
};

module.exports = { getUsers }