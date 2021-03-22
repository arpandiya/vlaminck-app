const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/reserve', (req, res) => {
  res.render('reserve');
});
module.exports = router;
