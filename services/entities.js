const request = require('request-promise');
const url = require('../config').orion_url;

function processEntities(id,headers) {
  console.log(id, headers)
  if (!id) {
    return entitiesOperations.getEntities(headers);
  }
  return entitiesOperations.getEntity(id, headers);
}

const entitiesOperations = {

  getEntities: (headers) => {
    return request({
      method: 'GET',
      headers: {
        "Fiware-Service": headers['fiware-service'],
        "Fiware-ServicePath": headers['fiware-servicepath']
      },
      uri: url,
      json: true
    });
  },

  getEntity: (id, headers) => {
    return request({
      method: 'GET',
      headers: {
        "Fiware-Service": headers['fiware-service'],
        "Fiware-ServicePath": headers['fiware-servicepath']
      },
      uri: url + id,
      json: true
    });
  }
};

module.exports = {
  processEntities
};
