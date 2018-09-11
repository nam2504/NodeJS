var express = require('express');
var router = express.Router();
var name = "[RegisterRouter] ";
/* GET home page. */
router.get('/', process);
router.post('/', process);

module.exports = router;


function process(req, res, next) {
    console.log(name);
    var user = req.cookies.user;
    var isLogin = req.btnLogin;
    console.log(name + "isLogin :" + isLogin);
    if (user === undefined || user === "") {
        console.log(name + "Render register");
        res.render('register', {title: "Register"})
    } else {
        console.log("[Index] render Index");
        res.render('index', {title: 'Control Your Money', name: user})
    }
}