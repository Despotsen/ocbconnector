const { entities, codeCheck, fileCheck, headersCheck } = require('../services/');
const utils = require('../utilities/utils.json');
const path = require('path');

function getEntities(req, res, id, headers) {

  headersCheck(headers, (err) => {
    if(err) {
    entitiesOperation.errorHandle(res, err);
    }
  });

  entities.processEntities(id, headers)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((error) => {
    entitiesOperation
      .errorHandle(res, error.statusCode || 500);
  });

}

function postEntities(req, res, file) {
  fileCheck(file, (err) => {
    if (err) {
      entitiesOperation.errorHandle(res, err);
    }
  });
  res.json('good')
}

const entitiesOperation = { 

  errorHandle: (res, code) => {
    res.status(code)
      .end(JSON.stringify(codeCheck(code)), 'binary');
  }

};

module.exports = {
  getEntities,
  postEntities
};
