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
      console.log(data.errors)
        res.json([
          {
            "Entity attribute errors:": data.errors.length,
            "Entities created:":data.result.length,
            "Info on rules for given type:": typet(data.result),
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
          if(data.result.length === 0) {
            console.log('nema')
          }
          res.json([
            {
              "Entity attribute errors:": data.errors.length,
              "Entities updated:":data.result.length,
              "Info on rules for given type:": typet(data.result)
            },
            data.errors,
            resp(data.result, 'Update')
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

function typet(data) {
  if (data.length === 0) {
    return "v1/rules/unknown"
  }
  return "v1/rules/" + data[0].type
}

module.exports = {
  getEntities,
  postEntities,
  getEntitiesType,
  updateEntities
};
