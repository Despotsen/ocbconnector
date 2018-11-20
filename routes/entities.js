const express = require("express");

const router = express.Router();
const { entities } = require("../controllers/");
const { upload, headermid } = require("../middlewares");
const rootController = require("../controllers/root");

module.exports = () => {
  router.post("/v1/entities/", headermid, upload.multer, (req, res) => {
    entities.postEntities(req, res, req.files[ 0 ], req.headers);
  });

  router.post("/v1/entities/update", headermid, upload.multer, (req, res) => {
    entities.updateEntities(req, res, req.files[ 0 ], req.headers);
  });

  router.get("/v1/entities", headermid, (req, res) => {
    rootController.getEntities(req, res);
  });

  router.get("/v1/entities/:id", headermid, (req, res) => {
    rootController.getEntity(req, res);
  });

  router.get("/v1/entities/type/:id", headermid, (req, res) => {
    rootController.getEntityByType(req, res);
  });

  router.get("/v1/rules", (req, res) => {
    rootController.getRules(req, res);
  });

  router.get("/v1/rules/:id", (req, res) => {
    rootController.getRule(req, res);
  });

  return router;
};
