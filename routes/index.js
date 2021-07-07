var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendfile('public/index.html');
});

router.get('/list', function(req, res, next) {
  res.sendfile('public/list.html');
});

router.get('/:comic_id', function(req, res, next) {
  res.render('comic', { title: 'Express' });
});

module.exports = router;
