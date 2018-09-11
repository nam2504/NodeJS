var express = require('express');
var router = express.Router();
var login = require('./Controler/userDBControler');
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query.btnRegister + "");
    if (req.query.btnRegister) {
        res.render("register", {title: "Register"})
    }
    var isLogin = false;
    var message = "Wrong user or password!";
    var user = req.query.user;
    var pw = req.query.password;
    console.log(user);
    console.log(pw);
    if (user === undefined) {
        message = "Please input account!!!"
    } else if (user === "nam2504") {
        req.cookies.user = user;
        res.render('index', { title: 'Control Your Money' , name: user});
        return
    } else {
        console.log(user)
    }
    if (isLogin) {
    
    } else {
        res.render("login", {title: "Login", message: message})
    }
});
router.post('/', function(req, res, next) {
    var user = req.param('user');
    var pw = req.param('password');
    login.login(user, pw, function (isLogin, message) {
        if (isLogin) {
            req.cookies.user = user;
            res.render('index', { title: 'Control Your Money' , name: user});
        } else {
            res.render("login", {title: "Login", message: message, user:user})
        }
    });


});

module.exports = router;
