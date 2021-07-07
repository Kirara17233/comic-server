var express = require('express');
var router = express.Router();

const options = {
  client: 'mysql',
  connection: 'mysql://walker:0@192.168.1.108:3306/Comics?charset=utf8mb4'
}

const page_size = 30

router.get('/page/:n', function(req, res, next) {
  const knex = require('knex')(options);
  knex('coco').select('id', 'name', 'update', 'latest')
  .orderBy('update', 'desc')
  .limit(page_size).offset(page_size * (parseInt(req.params.n) - 1))
  .then(rows => {
    const knex = require('knex')(options);
    knex('coco').count()
    .then(count => {
      res.send({
        page: Math.ceil(count[0]['count(*)'] / page_size),
        list: rows
      });
    });
  });
});

router.get('/comic/:id', function(req, res, next) {
  const knex = require('knex')(options);
  knex('coco').select('id', 'name', 'author', 'update')
  .where('id', '=', req.params.id)
  .then(rows => {
    res.send(rows[0]);
  });
});

router.get('/category/:id', function(req, res, next) {
  const knex = require('knex')(options);
  knex('coco_comic_category').select()
  .where('comic_id', '=', req.params.id)
  .then(rows => {
    const categories = new Array();
    for (row of rows) {
      const knex = require('knex')(options);
      categories.push(knex('coco_category').select()
      .where('id', '=', row['category_id'])
      .then(rows => {
        return {
          id: rows[0]['id'],
          name: rows[0]['name']
        };
      }));
    }
    Promise.all(categories).then(categories => {
      res.send(categories);
    });
  });
});

router.get('/chapters/:id', function(req, res, next) {
  const knex = require('knex')(options);
  knex('coco_chapter').select('id', 'name')
  .where('comic_id', '=', req.params.id)
  .orderBy('id', 'desc')
  .then(rows => {
    res.send(rows);
  });
});

router.get('/chapter/:comic_id/:id', function(req, res, next) {
  const knex = require('knex')(options);
  knex('coco_chapter').select('size', 'code')
  .where({
    comic_id: req.params.comic_id,
    id: req.params.id
  })
  .then(rows => {
    res.send(rows[0]);
  });
});

router.get('/search/:name', function(req, res, next) {
  const knex = require('knex')(options);
  knex.from('coco').select()
  .where('name', 'like', '%' + req.params.name + '%')
  .then(rows => {
    res.send(rows);
  });
});

module.exports = router;
