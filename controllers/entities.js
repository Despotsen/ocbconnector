const { entities, upload } = require('../services/');
const messages = require('../utils/message.json');
const config = require('../config');
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
}

const entitiesOperation = {

  errorHandle: (res, code) => {
    res.status(code)
      .json(codeChecker(code));
  }

};

function codeChecker(code) {
  if (!code) {
    return messages['500'];
  }
  return messages[code];
}

function fileCheck(file, cb) {
  allowedExt = config.ext;

  if (!file) {
    return cb('400')
  }

  if (!allowedExt.includes(path.extname(file.originalname))) {
    return cb('400')
  }
  
}

module.exports = {
  getEntities,
  postEntities
};
