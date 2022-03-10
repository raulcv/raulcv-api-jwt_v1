/**
 * set array to return wihtout value field of
 * @param {array} array - success text menssage
 * @param {string} value - success text menssage
 */

const removeItemFromArray = (arr = [], value = '') => {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

module.exports = { removeItemFromArray }