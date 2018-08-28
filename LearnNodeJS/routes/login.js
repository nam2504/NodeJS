var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var isLogin = false
    var message = "Wrong user or password!"
    var user = req.query.user
    var pw = req.query.password
    console.log(user)
    console.log(pw)
    if (user === undefined) {
        message = "Please input account!!!"
    } else if (user === "nam2504") {
        req.cookies.user = user
        res.render('index', { title: 'Control Your Money' , name: user})
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
    var isLogin = false
    var message = "Wrong user or password!"
    var user = req.param('user')
    var pw = req.param('password')
    console.log("user : " + user)
    console.log("pass : " + pw)
    if (user === undefined) {
        message = "Please input account!!!"
    } else if (user === "nam2504") {
        req.cookies.user = user
        res.render('index', { title: 'Control Your Money' , name: user})
        return
    } else {
        console.log(user)
    }
    if (isLogin) {
    
    } else {
        res.render("login", {title: "Login", message: message})
    }
});

module.exports = router;
