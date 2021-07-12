const options = {
  client: 'mysql',
  connection: 'mysql://walker:0@192.168.1.108:3306/Comics?charset=utf8mb4'
}

const comics = function() {
  return get[arguments[0]](arguments, require('knex')(options));
}

const get = {
  page: function() {
    return arguments[1]('coco').select('id', 'name', 'update', 'latest')
    .orderBy('update', 'desc')
    .limit(arguments[0][1]).offset(arguments[0][1] * (parseInt(arguments[0][2]) - 1))
    .then(rows => {
      const knex = require('knex')(options);
      return knex('coco').count()
      .then(count => {
        return {
          nPages: Math.ceil(count[0]['count(*)'] / arguments[0][1]),
          list: rows
        };
      });
    });
  },
  comic: function() {
    return arguments[1]('coco').select('id', 'name', 'author', 'update')
    .where('id', '=', arguments[0][1])
    .then(rows => {
      return rows[0];
    });
  },
  category: function() {
    return arguments[1]('coco_comic_category').select()
    .where('comic_id', '=', arguments[0][1])
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
      return Promise.all(categories).then(categories => {
        return categories;
      });
    });
  },
  chapters: function() {
    return arguments[1]('coco_chapter').select('id', 'name')
    .where('comic_id', '=', arguments[0][1])
    .orderBy('id', 'desc');
  },
  chapter: function() {
    return arguments[1]('coco_chapter').select('size', 'code')
    .where({
      comic_id: arguments[0][1],
      id: arguments[0][2]
    })
    .then(rows => {
      return rows[0];
    });
  },
  search: function() {
    return arguments[1]('coco').select()
    .where('name', 'like', '%' + arguments[0][1] + '%');
  }
}

module.exports = comics;
