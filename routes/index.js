const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Express' })
});
router.get('/api/home', storeController.homePage);
router.get('/api/stores', storeController.getStores);
router.get('/api/add', storeController.addStore);
router.post('/api/add', storeController.createStore);

module.exports = router;
