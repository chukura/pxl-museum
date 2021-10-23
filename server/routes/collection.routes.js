module.exports = (server) => {
  const collections = require('../controllers/collection.controller');

  var router = require('express').Router();

  // Retrieve all Collections
  router.get('/', collections.getCollections);

  server.use('/api/collections', router);
};
