const request = require('request-promise');
const url = require('../config').orion_url;

function processEntities(id) {
  if (!id) {
    return entitiesOperations.getEntities();
  }
  return entitiesOperations.getEntity(id);
}

const entitiesOperations = {

  getEntities: () => {
    return request({
      method: 'GET',
      uri: url,
      json: true
    });
  },

  getEntity: (id) => {
    return request({
      method: 'GET',
      uri: url + id,
      json: true
    });
  }
};

module.exports = {
  processEntities
};
