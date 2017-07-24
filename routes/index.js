var express = require('express');
var router = express.Router();

router.get('/api', (req, res) => {
  res.json({message: 'Welcome to Express and React'});
  console.log('Running on index route!')
});

module.exports = router;
