var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

router.put('/journal/new', function(req,res){
  User.findOne({_id: req.body.userId}).then(function(user){
    console.log(user)
  })
  .then(function(user){
    res.send({user:user});
  })
  .catch(function(err){console.log(err)});
  
 
})

router.get('/journal', function(req, res) {
  console.log('/journal roue reached (GET)');
  res.send('lalalal')
  
})
module.exports = router;