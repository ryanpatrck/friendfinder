const friends = require("../data/friends.js");

module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })

    app.post("/api/friends", (req, res) => {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // The result of the user's survey POST and parse it
        var userData = req.body
        var userScores = userData.scores

        // This variable will calculare the difference between the user's scores and the scores of 
        // each user in the database
        var totalDifference = 0

        // Loop through all the friends possibilities in the database
        for (var i=0; i<friends.length; i++){

            console.log(friends[i].name);
            totalDifference = 0
        // Loop through all the scores of each friend
        for (var j=0; j < friends[i].scores[j]; j++) {

            // Calculate the difference between the scores and sum them into the totalDifferences
            totalDifference += Math.abs(parseInt(userscores[j])-parseInt(freinds[i].scores[j]))

            // If the sum of differences is less than the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {

                //Reset the bestMatch to be the new friend
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
              }
            }
        }

        // Save the user's data to the database (This has to happen after the check.) Otherwise,
        // the database will always return that the user is the user's best friend).
        friends.push(userData);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);
    })
}