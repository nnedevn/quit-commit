var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

router.put('/journal/new', function (req, res) {
  console.log(req.body);
  User.update({ "_id": req.body.userId },
    {
      $push: {
        "journalEntries": {
          "moodRating": req.body.moodRating,
          "journalEntry": req.body.journalEntry,
          "createdOn": new Date()
        }
      }
    },
    function (err, numAffected) {
      if (err) {
        console.log(err)
      } else {
        User.findOne({"_id": req.body.userId}, function(err,user){
          console.log(user);
          res.json({user:user})
        })

        console.log(numAffected);
      }
    }
  )

});

router.put('/reward', function(req, res){

//   console.log(req.body)
// User.findOne({"_id": req.body.userId}).then(function(user){
//   console.log(user);
// })

  User.update(
    { "_id": req.body.userId },
  {
    $push: {
      "rewards":{
        "rewardUrl": req.body.rewardUrl,
        "rewardPrice": req.body.rewardPrice
        }
    }
  },
    function(err, numAffected) {
      console.log(numAffected);
    });

});

module.exports = router;
