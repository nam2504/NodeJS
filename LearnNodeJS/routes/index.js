var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var user = req.cookies.user;
    if (user === undefined)
        res.render('login', {title: "Login"});
    else res.render('index', {title: 'Control Your Money', name: user})
});

module.exports = router;
