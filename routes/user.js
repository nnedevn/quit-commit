var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

router.put('/journal', function(req,res){
  console.log(req.body);
  res.send(req.body);
 
})

router.get('/journal', function(req, res) {
  console.log('/journal roue reached (GET)');
  res.send('lalalal')
  
})
module.exports = router;