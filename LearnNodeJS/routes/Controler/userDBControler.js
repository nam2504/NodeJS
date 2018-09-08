var dBControler = require("../../routes/Controler/dBControler");

function login(user, pass, callback) {
    var sql = "select password from `user` where `user` = ? ";
    dBControler.query(sql, user, function (rows, err) {
        if (err == null) {
            try {
                console.log(rows);
                if (rows[0].password === pass) {
                    callback(true);
                } else {
                    callback(false, "Wrong password!!!");
                }
            } catch (e) {
                console.log(e.message)
                callback(false, "Something wrong!!!")
            }
        } else callback(false, "Don't exit user!!!")
    });
}

module.exports.login = login;