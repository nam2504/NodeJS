var express = require('express');
var md5 = require('md5');
var router = express.Router();
var login = require('./Controler/userDBControler');
/* GET home page. */
router.get('/', process);
router.post('/', process);

function process(req, res, next) {
    console.log("Login");
    var user = req.param('user');
    var pw = req.param('password');//md5(req.param('password'));
    console.log("[Login] user = " + user + "; password = " + pw);

    login.login(user, pw, function (isLogin, message) {
        if (isLogin) {
            res.cookie("user", user, { maxAge: 900000});
            res.redirect("/")
        } else {
            res.render("login", {title: "Login", message: message, user:user})
        }
    });
    next
}
module.exports = router;
