var knex = require('knex')({
    client:'mdb',
    connection:{
        host:'192.168.1.108',
        user: 'walker',
        password: '0',
        database: 'Comic'
    }
})
