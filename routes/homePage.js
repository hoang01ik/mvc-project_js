const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/', homeController.getHomePage);

router.get('/product/', homeController.getProductPage);

module.exports = router;