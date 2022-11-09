var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('selector', { title: 'PALLA VENU REDDY Selector' });
});

module.exports = router;