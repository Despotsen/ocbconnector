const { entities } = require('../services/');

function getEntities(req, res, id) {
  entities.processEntities(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
}

module.exports = {
  getEntities,
};

