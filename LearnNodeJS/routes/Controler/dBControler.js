var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'world',
    debug: false
});
// callback(data, err)
function query(sql, params, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            if (connection !== undefined) connection.release();
            console.log(err);
            callback(null, err);
        } else {
            connection.query(sql, params, function (err, rows) {
                if (connection !== undefined) connection.release();
                if (err) {
                    callback(null, err)
                } else {
                    callback(rows, null)
                }
            })
        }
    });
}

module.exports.query = query;