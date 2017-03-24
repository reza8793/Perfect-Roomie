var User = require("../models/userSchema");
var fblocal = require('./fblocal');


// var EU1= [5,5,5,5,2,5,5,5,5,5,5,5,5];

// var EU2 = [2,2,2,2,2,2,2,2,2,2,2,2,2];

// var EU3 = [3,3,3,3,3,3,3,2,2,2,2,2,2];

//declare globals here
//var matchArray= new Array;
var totalDiff = new Array;



function algorithmInitializer() {
	// console.log("fblocal",fblocal);
	User.findOne({FBid: fblocal.userID}, function(err, user) {
		console.log("This User is:", user.FBName);
		newUser = user.livingStyle;
		console.log("The newUser is: " + newUser);
		User.find({ FBid: { $ne: fblocal.userID } }, function(error, users ) {

			if (error)
			{
				console.log("algorithmInitializer is having the issue: " +error);
			}
			else {
				var db_roomieList = new Array;
				for (var i = 0; i < users.length; i++)
					{

						var roomieListObj = {
							FBid: users[i].FBid,
							FBName: users[i].FBName,
							livingStyle: users[i].livingStyle
						}

						db_roomieList.push(roomieListObj);

					}

				}
				findroomies(newUser, db_roomieList);
			});
	});
};


// module.exports = function (app) {


	//  when clicked the "find roomie" button,

	// take the new user survey response and match with all existing

	// users and lifestyle's responses, find the best match

	// and provide the best match


//var roomieList // find all the existing users in database and access their response list



function findroomies (livingStyle, db_roomieList) {

	var matchArray = new Array;

	for (var i = 0; i <db_roomieList.length; i++) {
		var matchArrayObj = {
			userID: db_roomieList[i].FBid,
			FBName: db_roomieList[i].FBName,
			diffScore: diffMaker(livingStyle,db_roomieList[i].livingStyle)
		}
		if (matcArrayObj.diffScore <= 15) {
			matchArray.push(matchArrayObj);
		}

	}

	matchArray.sort(function(a, b) {
      // {"roommateMatches.diffScore" : "desc"}
      if (a.diffScore < b.diffScore) {
        return -1;
      }
      if (a.diffScore > b.diffScore) {
        return 1;
      }

      return 0;
    });



	console.log(matchArray);
	console.log('userid', fblocal.userID)

	User.findOneAndUpdate(
      { FBid: fblocal.userID },
      { roommateMatches: matchArray }
    ).exec(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        console.log(error);
      }
      // Or send the doc to the browser
      else {
        console.log(doc);
      }
    });

function getMutuals(user, matches) {
	var mutuals = [];
	for (var i = 0; i < user.length; i++) {
		for (var j = 0; matches.length; j++) {
			if (user[i] === matches[j]) {
				mutuals.push(user[i]);
			}
		}
	}
}

}


function diffMaker(x,y)
{
	for (var k =0; k<x.length; k++)
	{
		totalDiff[k] = Math.abs(x[k] - y[k]);
	}
	console.log("totalDiff is "+ totalDiff );
	var result = sumfunction(totalDiff);
	console.log("results is " + result);
	return result;

}

function sumfunction(x)  {
	var sum = x.reduce(add, 0);
		function add(a, b) {
	    return a + b;
		}
		console.log("sum is " + sum);
		return sum;
}

module.exports = algorithmInitializer;
