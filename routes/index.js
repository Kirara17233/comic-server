var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendfile('public/index.html');
});

router.get('/list', function(req, res, next) {
  res.sendfile('public/list.html');
});

module.exports = router;
