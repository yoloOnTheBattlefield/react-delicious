var express = require('express');
var router = express.Router();

router.get('/api/home', (req, res) => {
  res.json({message: 'Running on home route!'});
  console.log('Running on home route!')
});

module.exports = router;
