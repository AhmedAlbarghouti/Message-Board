var express = require('express');
var router = express.Router();
let messages = require('../public/javascripts/messages');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Current Messages:', messages: messages });
});


module.exports = router;
