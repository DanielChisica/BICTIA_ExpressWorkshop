var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('entro')
  res.render('index', { title: 'News paper main page' });
});

module.exports = router;
