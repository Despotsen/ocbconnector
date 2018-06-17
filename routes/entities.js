const express = require('express');

const router = express.Router();
const { entities } = require('../controllers/');
const { upload } = require('../middlewares');
const rules = require('../utilities/rules.json');


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

  router.route('/v1/rules')
    .get((req, res) => {
      res.json(rules['rules']);
    });

  router.route('/v1/rules/:id')
  .get((req, res) => {
    if(!rules[req.params.id]) {
      res.status(404).json(`Rules details not found/exist for ${req.params.id}`);
    }
    res.status(200).json(rules[req.params.id]);
  });

  router.route('/v1/entities/type/:id')
    .get((req, res) => {
      entities.getEntitiesType(res, req.params.id, req.headers);
    });

  router.route('/v1/entities/update')
  .post(
    upload.multer,
    (req, res) => {
      entities.updateEntities(req, res, req.files[0], req.headers);
    });

  return router;
};
