//require our dependencies
var express = require('express');
var router = express.Router();

var angryBirds = require('../modules/angry_birds');

// routes

router.get('/', function(request, response){
  // set up mustache data:
  var mustacheData = {
    birdList: angryBirds.birds
  };

  response.render('./angry_birds/index', mustacheData);
})

router.get('/:id', function(request, response){
  var birdId = request.params.id;  //get the number from the url and save as variable birdId
  var mustacheData = {
    bird: angryBirds.birds[birdId]  /* use that number as an index in the array in angry_birds.js.  Send the object at that index to mustache*/
  }
  response.render('./angry_birds/show', mustacheData);
})

// export the router

module.exports = router;