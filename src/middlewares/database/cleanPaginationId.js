/**
 * Hack for mongoose-paginate, removes 'id' from results
 * @param {Object} result - result object
 */
 const cleanPaginationId = (result = {}) => {
    result.docs.map((element) => delete element.id)
    return result
  }
  
  module.exports = { cleanPaginationId }