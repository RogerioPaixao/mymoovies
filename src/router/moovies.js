const express = require('express');
const router = express.Router();
const mooviesController = require('../controllers/mooviesController')

router.get('/', mooviesController.findAll);
router.get('/:id', mooviesController.find);
router.post('/', mooviesController.create);
router.delete('/:id', mooviesController.delite);

  module.exports = router;