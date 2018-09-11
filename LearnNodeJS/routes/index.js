var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("[Index]");
    var user = req.cookies.user;
    if (user === undefined || user === "") {
        console.log("[Index] render Login");
        res.render('login', {title: "Login"})
    } else {
        console.log("[Index] render Index");
        res.render('index', {title: 'Control Your Money', name: user})
    }
});

module.exports = router;
