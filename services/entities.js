const request = require('request-promise');
const url = require('../config').orion_url;

function processEntities(id,headers) {
  if (!id) {
    return entitiesOperations.getEntities(headers);
  }
  return entitiesOperations.getEntity(id, headers);
}

function sendEntities(data, headers, operation) {
  if(!operation) {
    return entitiesOperations.createEntity(data, headers);
  }
  return entitiesOperations
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
      uri: url + '/' + id,
      json: true
    });
  },

  createEntity: (data,headers) => {
    return request({
      method: 'POST',
      headers: {
        "Fiware-Service": headers['fiware-service'],
        "Fiware-ServicePath": headers['fiware-servicepath']
      },
      uri: `${url}/${data.id}/attrs?options=keyValues`,
      body: Object.assign({}, data, {
        id: undefined,
        type: undefined
      }),
      json:true
    });
  },

  updateEntity: (data, headers) => {
    return request({

    });
  }
};



module.exports = {
  processEntities
};
