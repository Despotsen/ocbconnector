const express = require('express');

const router = express.Router();
const { entities } = require('../controllers/');
const { upload } = require('../middlewares');

module.exports = () => {
  router.route('/v1/entities')
    .get((req, res) => {
      entities.getEntities(req, res, req.params.id);
    })
    .post(upload.multer,
      (req, res, next) => {
      entities.postEntities(req, res, req.files);
    });

  router.route('/v1/entities/:id')
    .get((req, res) => {
      entities.getEntities(req, res, req.params.id);
    });

  return router;
};
