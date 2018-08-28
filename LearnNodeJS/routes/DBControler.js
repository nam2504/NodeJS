var mysql     =    require('mysql');
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'world',
    debug    :  false
});

pool.getConnection(function (err, connection) {
    if (err) {

    }
});