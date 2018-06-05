const { entities, codeCheck, fileCheck } = require('../services/');
const utils = require('../utilities/utils.json');
const path = require('path');

function getEntities(req, res, id) {
  entities.processEntities(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      entitiesOperation
        .errorHandle(res, error.statusCode || 500);
    });
}

function postEntities(req, res, file) {
  fileCheck(file[0], (err) => {
    if (err) {
      entitiesOperation.errorHandle(res, err);
    }
  });
  res.json('All good')
}

const entitiesOperation = { 

  errorHandle: (res, code) => {
    res.status(code)
      .json(codeCheck(code));
  }

};

module.exports = {
  getEntities,
  postEntities
};
