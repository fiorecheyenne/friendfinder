const friends = require("../data/friends");
const path = require("path");

module.exports = function(app) {
  //return friends found in friends.js

  app.get("/api/friends", function(req, resp) {
    resp.json(friends);
  });
  app.post("/api/friends", function(req, resp) {
    console.log(req.body.scores);

    //get user details
    const friend = req.body;

    //parseInt for scores
    for (var i = 0; i < friend.scores.length; i++) {
      friend.scores[i] = parseInt(friend.scores[i]);
    }

    //whoever has min difference in scores will be bff, default will be first friend
    var bff = 0;
    var minDiff = 40;

    //
    for (var i = 0; i < friends.length; i++) {
      var totDiff = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        var diff = Math.abs(friend.scores[j] - friends[i].scores[j]);
        totDiff += diff;
      }

      if (totDiff < minDiff) {
        bff = i;
        minDiff = totDiff;
      }
    }
    friends.push(friend);

    resp.json(friends[bff]);
  });
};
