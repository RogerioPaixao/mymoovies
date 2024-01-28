const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.findAll);
router.get('/:id', categoryController.find);
router.post('/', categoryController.create);
router.delete('/:id', categoryController.delite);


  module.exports = router;