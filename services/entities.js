const request = require('request-promise');
const url = require('../config').orion_url;

const entitiesOperations = {

  getEntities: (headers) => request({
    method: 'GET',
    headers: {
      'Fiware-Service': headers['fiware-service'],
      'Fiware-ServicePath': headers['fiware-servicepath'],
    },
    uri: `${url}entities/?limit=100`,
    json: true,
  }),

  getEntity: (id, headers) => request({
    method: 'GET',
    headers: {
      'Fiware-Service': headers['fiware-service'],
      'Fiware-ServicePath': headers['fiware-servicepath'],
    },
    uri: `${url}entities/${id}`,
    json: true,
  }),

  createEntity: (data, headers) => request({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Fiware-Service': headers['fiware-service'],
      'Fiware-ServicePath': headers['fiware-servicepath'],
    },
    uri: `${url}op/update?options=keyValues`,
    body: {
      actionType: 'APPEND',
      entities: data
    },
    json: true
  }),

  updateEntity: (data, headers) => request({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Fiware-Service': headers['fiware-service'],
      'Fiware-ServicePath': headers['fiware-servicepath'],
    },
    uri: `${url}op/update?options=keyValues`,
    body: {
      actionType: 'UPDATE',
      entities: data,
    },
    json: true,
  }),
};

function processEntities(id, headers) {
  if (!id) {
    return entitiesOperations.getEntities(headers);
  }
  return entitiesOperations.getEntity(id, headers);
}

async function sendEntities(data, headers, operation) {
  // const few = chunkArray(data, 10);
  // const ps = [];
  // if (!operation) {
  //   if (data.length <= 1000) {
  //     return entitiesOperations.createEntity(data, headers);
  //   }
  //   for(let i = 0; i<1; i++) {
  //     console.log('Sending: ' + i, few[i].length)
  //     ps.push(await entitiesOperations.createEntity(few[i], headers));
  //     console.log('Finished: ' + i, few[i].length)
  //   }
  //   Promise.all(ps)
  //   .then((results) => {
  //     console.log(results)
  //       return Promise.resolve('good')
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     return Promise.reject(err);
  //   })
  // }
  // return entitiesOperations.updateEntity(data, headers);

  var slicer = 0;
  var allBatches = []
  while (data.length > slicer) {
    let anchor = slicer;
    slicer += 100;
    allBatches.push(
      entitiesOperations.createEntity(data.slice(anchor,slicer), headers)
    );
    console.log(allBatches.length-1);
    allBatches[allBatches.length-1]
  }
  return Promise.all(allBatches)
    .then((x) => {return Promise.resolve('perfect yes money')})
    .catch((e)=>{console.log(e)})
}

function chunkArray(myArray, chunk_size){
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];;
  
  for (index = 0; index < arrayLength; index += chunk_size) {
      myChunk = myArray.slice(index, index+chunk_size);
      tempArray.push(myChunk);
  }

   return tempArray;
}

module.exports = {
  processEntities,
  sendEntities,
  entitiesOperations
};
