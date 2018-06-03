const request = require('request-promise');
const config = require('../config');

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
      uri: config.orion_url,
      json: true,
    });
  },

  getEntity: (id) => {
    return request({
      method: 'GET',
      uri: config.orion_url + id,
      json: true,
    });
  },
};

module.exports = {
  processEntities,
};
