const {
  entities, codeCheck, fileCheck, headersCheck, parser
} = require('../services/');

const entitiesOperation = {
  errorHandle: (res, code) => {
    res.status(code)
      .end(codeCheck);
  }
};

function getEntities(req, res, id, headers) {
  headersCheck(headers, (err) => {
    if (err) {
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

function postEntities(req, res, file, headers) {
  headersCheck(headers, (err) => {
    if (err) {
      entitiesOperation.errorHandle(res, err);
    }
  });

  fileCheck(file, (err) => {
    if (err) {
      entitiesOperation.errorHandle(res, err);
    }
  });

  parser.parse(file.buffer.toString()).then((result) => {
    res.json(result);
  })
    .catch((error) => {
      res.json(error);
    });
}

module.exports = {
  getEntities,
  postEntities
};
