// Your `apiRoutes.js` file should contain two routes:

// * A GET route with the url `/api/cats`. This will be used to display a JSON of all possible cats.
// * A POST routes `/api/cats`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//------------------------------------------------------------------------
// LOAD DATA
//------------------------------------------------------------------------
var catList = require("../data/cats.js");

//------------------------------------------------------------------------
// ROUTING
//------------------------------------------------------------------------

module.exports = function(app) {

  

  // gets data from cats.js and places it in the /api/cats route
  app.get("/api/cats", function(res) {
    res.json(catList);
  });

  // captures new cat and posts it  to cats.js 
  app.post("/api/cats", function(req, res) {
    
    var newCatScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    //runs through all current cats in list
    for(var i=0; i<catList.length; i++){
      var scoresDiff = 0;
      //run through scores to compare cats
      for(var j=0; j<newCatScores.length; j++){
        scoresDiff += (Math.abs(parseInt(catList[i].scores[j]) - parseInt(newCatScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
      
    }
    //after all cats are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var yourMatch = catList[bestMatch];
    res.json(yourMatch);

    //pushes new submission into the catList array
    catList.push(req.body);
  });
}