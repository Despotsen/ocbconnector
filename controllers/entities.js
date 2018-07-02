const {
  entities, codeCheck, fileCheck, headersCheck, parser
} = require('../services/');

const resp = require('../utilities/response').resposneResult;

const entitiesOperation = {
  errorHandle: (res, code) => {
    res.status(code)
      .end(codeCheck(code));
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
      console.log(error)
      entitiesOperation
        .errorHandle(res, error.statusCode || 500);
    });
}

function getEntitiesType(res, type, headers) {
  headersCheck(headers, (err) => {
    if (err) {
      entitiesOperation.errorHandle(res, err);
    }
  });

  entities.processEntitiesByType(type, headers)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      entitiesOperation
        .errorHandle(res, error.statusCode || 500);
    })

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

  return parser.parse(file.buffer.toString()).then((data) => {
    entities.sendEntities(data.result, headers).then((result) => {
        res.json([
          {
            "Entity attribute errors:": data.errors.length,
            "Entities created:":data.result.length,
            "Info on rules for given type:": `v1/rules/${data.result[0].type}`,
          },
          data.errors,
          resp(data.result, 'Create')
        ]);
    })
    .catch((error) => {
      res.json(error)
    });
  })
  .catch((error) => {
    res.json(error);
  });
}

function updateEntities(req, res, file, headers) {
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

  return parser.parse(file.buffer.toString(),'update')
    .then((data) => {

      entities.updateEntities(data.result, headers)
        .then((result) => {
          res.json([
            {
              "Entity attribute errors:": data.errors.length,
              "Entities updated:":data.result.length,
              "Info on rules for given type:": `v1/rules/${data.result[0].type}`
            },
            data.errors,
            resp(data.result, 'Create')
          ]);
        })
        .catch((error) => {
          res.json(error);
        })
    })
    .catch((error) => {
      res.json(error)
    })
}

module.exports = {
  getEntities,
  postEntities,
  getEntitiesType,
  updateEntities
};
