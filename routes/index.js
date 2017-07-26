const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');


router.get('/', storeController.homePage);
router.get('/stores', storeController.getStores);
router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

module.exports = router;
