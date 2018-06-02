const express = require('express');

const router = express.Router();

module.exports = () => {
  router.route('/v1/entities')
    .get((req, res) => {
      res.send('List of all entities');
    })
    .post((req, res) => {
      res.send('Hello from post');
    });

  router.route('/v1/entities/:id')
    .get((req, res) => {
      res.send(`Hello to: ${req.params.id}`);
    });

  return router;
};
