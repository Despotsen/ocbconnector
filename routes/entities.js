const express = require('express');

const router = express.Router();
const { entities } = require('../controllers/');
const { upload } = require('../middlewares');

module.exports = () => {
  router.route('/v1/entities')
    .get((req, res) => {
      entities.getEntities(req, res, req.params.id, req.headers);
    })
    .post(
      upload.multer,
      (req, res) => {
        entities.postEntities(req, res, req.files[0], req.headers);
      }
    );

  router.route('/v1/entities/:id')
    .get((req, res) => {
      entities.getEntities(req, res, req.params.id, req.headers);
    });

  router.route('/v1/rules/:id')
    .get((req, res) => {
      res.json(`Rules: ${req.params.id}`);
    });

  return router;
};
