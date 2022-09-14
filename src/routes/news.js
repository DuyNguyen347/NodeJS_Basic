const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/newController');
router.get('/:slug', newsController.showMessage);
router.get('/', newsController.index);

module.exports = router;
