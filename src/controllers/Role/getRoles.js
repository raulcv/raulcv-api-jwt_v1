const Role = require('../../models/role');
const { handleError } = require('../../middlewares/utils')
const { getItems, checkQueryString } = require('../../middlewares/database');

const getRoles = async (req, res) => {
    try {
        const query = await checkQueryString(req.query);
        const roles = await getItems(req, Role, query);
        res.status(200).json(roles);
    } catch (err) {
        handleError(res, err);
    }
};

module.exports = { getRoles }