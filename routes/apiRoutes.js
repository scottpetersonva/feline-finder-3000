// Your `apiRoutes.js` file should contain two routes:

// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//------------------------------------------------------------------------
// LOAD DATA
//------------------------------------------------------------------------
var friendsArray = require("../data/friends.js");

//------------------------------------------------------------------------
// ROUTING
//------------------------------------------------------------------------

module.exports = function(app) {

  

  // gets data from friends.js and places it in the /api/friends route
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // captures new cat and posts it  to friends.js 
  app.post("/api/friends", function(req, res) {
    
    var catMatch = 0;
    var newCatScores = req.body.scores;
    var scoresArray = [];

    //runs through cats in current list then through new cat scores to find cat matches
    for(var i=0; i<friendsArray.length; i++){
      var scoreDifference = 0;
     
      //pushes new results into scoresArray
      scoresArray.push(scoreDifference);
    }

    //compares cats and finds best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[catMatch]){
        catMatch = i;
      }
    }

    //return bestcatMatch data
    var bestCatMatch = friendsArray[catMatch];
    res.json(bestCatMatch);

    //pushes new submission into the friendsList array
    
    friendsArray.push(req.body)


  });
}