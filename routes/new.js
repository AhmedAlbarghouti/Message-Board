const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req)
  
  res.render('form', { title: 'Create New Message:' });
});

router.post('/', (req,res) =>{
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  }
  messages.push(newMessage);
  res.render('index', { title: 'Current Messages:', messages: messages });
})

module.exports = router;
