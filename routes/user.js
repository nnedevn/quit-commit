var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

router.put('/journal/new', function(req,res){
console.log(req.body);
  User.update({"_id": req.body.userId},
    {$push:{"journalEntries":{ 
      "moodRating": req.body.moodRating,
      "journalEntry": req.body.journalEntry,
      "createdOn": new Date()
    } }},
    function(err, numAffected){
      if(err){console.log(err)
      } else{
        console.log(numAffected);
      }
    }
)

});


module.exports = router;