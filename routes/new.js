const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Create New Message:' });
});

router.post('/', (req,res) =>{
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  }
  messages.unshift(newMessage);
  res.redirect('/');
  
})

module.exports = router;
