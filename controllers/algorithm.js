var User = require("../models/userSchema");
var fblocal = require('./fblocal');


// var EU1= [5,5,5,5,2,5,5,5,5,5,5,5,5];

// var EU2 = [2,2,2,2,2,2,2,2,2,2,2,2,2];

// var EU3 = [3,3,3,3,3,3,3,2,2,2,2,2,2];

//declare globals here
//var matchArray= new Array;
//var totalDiff = new Array;

function sayHi() {
	console.log('hi')
}

function algorithmInitializer() {
	// console.log("fblocal",fblocal);
	User.findOne({FBid: fblocal.userID}, function(err, user) {
		console.log("Null OK, Otherwise Error noted:", err);
		console.log("This User is:", user.FBName);
		currentUserLivingStyle = user.livingStyle;
		currentUserFriendList = user.friendList;
		console.log("The newUser is: " + currentUserLivingStyle);
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
							FBEmail: users[i].FBEmail,
							age: users[i].age,
							livingStyle: users[i].livingStyle,
							photolink: users[i].photolink
							
						}

						db_roomieList.push(roomieListObj);

					}

				}
				findroomies(currentUserLivingStyle, db_roomieList);

			});
	});
};


// module.exports = function (app) {


	//  when clicked the "find roomie" button,

	// take the new user survey response and match with all existing

	// users and lifestyle's responses, find the best match

	// and provide the best match


//var roomieList // find all the existing users in database and access their response list



function findroomies (livingStyle, db_roomieList)
{

	var matchArray = new Array;

	for (var i = 0; i <db_roomieList.length; i++)
	{
		var matchArrayObj = {
			userID: db_roomieList[i].FBid,
			FBName: db_roomieList[i].FBName,
			FBEmail: db_roomieList[i].FBEmail,
			age: db_roomieList[i].age,
			diffScore: diffMaker(livingStyle,db_roomieList[i].livingStyle),
			photolink: db_roomieList[i].photolink
		}

		matchArray.push(matchArrayObj);

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

  


/*
	console.log("matchArray is " + matchArray);

	var sortedMatchArray = matchArray.diffScore.sort(function (a, b) { return a - b;  });


	for (var i = 0; i <db_roomieList.length; i++ )
	{
		var bestMatch = sortedMatchArray[i];
		console.log("best Roommate match is " + bestMatch);

	}
*/

}


function diffMaker(x,y)
{
	var totalDiff = new Array;

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

function getMutuals(array1, array2) {
	//do nothing
};

function getInfoByID(inputUserID) {
/*	var query = User.find({FBid: inputUserID }).select("FBid, FBName, FBEmail, photolink");

	query.exec(function(error, doc) {
      
	    if (error) {
	        console.log(error);
	    }
	      // Or send the doc to the browser
	    else {
	    	console.log(doc);   	
	   	}
	});
*/
console.log('getinfobyid', inputUserID)
};

module.exports = algorithmInitializer;