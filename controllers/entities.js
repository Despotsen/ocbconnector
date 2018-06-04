const { entities } = require('../services/');
const response = require('../utils/message.json');

function getEntities(req, res, id) {
  entities.processEntities(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      entitiesOperation
        .errorHandle(res, error.message, error.statusCode || 500);
    });
}

const entitiesOperation = {

  errorHandle: (res, message, code) => {
    res.status(code)
      .json(msgRes(code));
  }
};

function msgRes(code) {
  if (!code) {
    return response['500'];
  }
  return response[code];
}

module.exports = {
  getEntities
};
