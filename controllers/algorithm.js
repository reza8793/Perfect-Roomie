var User = require("../models/userSchema");
var fblocal = require("./fblocal");
var userRoutes = require("./userRoutes"); //circular referencing. Probably not a good idea.
var FB = require('fb');

function algorithmInitializer() {
	// console.log("fblocal",fblocal);
	User.findOne({FBid: fblocal.userID}, function(err, user) {
		console.log("Null OK, Otherwise Error noted:", err);
		console.log("This User is:", user.FBName);
		var currentUserLivingStyle = user.livingStyle;
		var currentUserFriendListArray = arrayifyFriendList(user.friendList);

		console.log("The newUser is: " + currentUserLivingStyle);
		//console.log("currentUserFriendListArray: " + currentUserFriendListArray);
		User.find({ FBid: { $ne: fblocal.userID } }, function(error, users ) {

			if (error)
			{
				console.log("algorithmInitializer is having the issue: " +error);
			}
			else {
				var db_roomieList = new Array;
				for (var i = 0; i < users.length; i++) {

					var targetUserFriendListArray = arrayifyFriendList(users[i].friendList);
					var mutualFriendsArray = currentUserFriendListArray.mutual(targetUserFriendListArray);

					console.log('mutual friends:', mutualFriendsArray);

					var roomieListObj = {
						FBid: users[i].FBid,
						FBName: users[i].FBName,
						FBEmail: users[i].FBEmail,
						age: users[i].age,
						livingStyle: users[i].livingStyle,
						photolink: users[i].photolink,
						mutualFriends: mutualFriendsArray
					}

					db_roomieList.push(roomieListObj);

				}

			}
			findroomies(currentUserLivingStyle, db_roomieList);

		});
	});
};



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
			photolink: db_roomieList[i].photolink,
			mutualFriends: db_roomieList[i].mutualFriends
			//mutualFriends: mutualFriendsExpander(db_roomieList[i].mutualFriends)

		}

		matchArray.push(matchArrayObj);

	}

	//sort your matcharray by scores ascending
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


}


function diffMaker(x,y) {
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
	array1.mutual(array2);
}

function arrayifyFriendList(friendList) {
	var returnArray = new Array;

	for (var i = 0; i < friendList.length; i++) {
		returnArray.push(friendList[i].id);
	}

	return returnArray;
}

function mutualFriendsExpander(mutualFriendsArray) {

	console.log("mutualFriendsArray", mutualFriendsArray)

	var expandedArray = new Array;

	for (i = 0; i < mutualFriendsArray.length; i++) {
		expandedArray.push(getFBInfoByID(mutualFriendsArray[i]));
	}

	console.log("expandedArray:", expandedArray);

	return expandedArray;
}


//moved to userRoutes. Needs FB
function getFBInfoByID(id) {
	var query = id + "?fields=id,name,friends,picture{url},email,birthday";

    FB.api(query, { access_token: fblocal.appAccessToken}, function (res) {
        if(!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }

        console.log("getFBInfoByID", res);
    	return res;
    });

}


Array.prototype.mutual = function(arr2) {
	var ret = new Array;
	for (var i in this) {
		if(arr2.indexOf( this[i]) > -1) {
			ret.push( this[i] );
		}
	}
	return ret;
};


module.exports = algorithmInitializer;
