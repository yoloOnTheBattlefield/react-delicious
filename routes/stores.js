var express = require('express');
var router = express.Router();

router.get('/api/stores', (req, res) => {
  res.json({message: 'Running on stores route'});
  console.log('Running on Stores route!')
});

module.exports = router;
