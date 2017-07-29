const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');


router.get('/', storeController.homePage);
router.get('/stores', storeController.getStores);
router.get('/add', storeController.addStore);

router.post('/add',
  storeController.createStore
);
router.post('/add/:id', storeController.updateStore);
router.get('/stores/:id/edit', storeController.editStore);

router.get('/stores/:id', storeController.getStore);

module.exports = router;
