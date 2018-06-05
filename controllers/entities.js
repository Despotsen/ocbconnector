const { entities } = require('../services/');
const messages = require('../utils/message.json');

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

function postEntities(req, res, next) {
  res.json('Hello from post');
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

module.exports = {
  getEntities,
  postEntities
};
