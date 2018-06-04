const express = require('express');

const router = express.Router();
const { entities } = require('../controllers/');

module.exports = () => {
  router.route('/v1/entities')
    .get((req, res) => {
      entities.getEntities(req, res, req.params.id);
    })
    .post((req, res) => {
      entities.postEntities(req, res);
    });

  router.route('/v1/entities/:id')
    .get((req, res) => {
      entities.getEntities(req, res, req.params.id);
    });

  return router;
};
