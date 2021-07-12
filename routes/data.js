const express = require('express');
const router = express.Router();

const comics = require('../models/db');

router.get('/page/:nPages/:n', function(req, res, next) {
  comics('page', req.params.nPages, req.params.n).then(result => res.send(result));
});

router.get('/comic/:id', function(req, res, next) {
  comics('comic', req.params.id).then(result => res.send(result));
});

router.get('/category/:id', function(req, res, next) {
  comics('category', req.params.id).then(result => res.send(result));
});

router.get('/chapters/:id', function(req, res, next) {
  comics('chapters', req.params.id).then(result => res.send(result));
});

router.get('/chapter/:comic_id/:id', function(req, res, next) {
  comics('chapter', req.params.comic_id, req.params.id).then(result => res.send(result));
});

router.get('/search/:name', function(req, res, next) {
  comics('search', req.params.name).then(result => res.send(result));
});

module.exports = router;
