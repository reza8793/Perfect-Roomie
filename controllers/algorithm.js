var User = require("../models/userSchema");
var fblocal = require('./fblocal');


// var EU1= [5,5,5,5,2,5,5,5,5,5,5,5,5];

// var EU2 = [2,2,2,2,2,2,2,2,2,2,2,2,2];

// var EU3 = [3,3,3,3,3,3,3,2,2,2,2,2,2];


function algorithmInitializer() {
	console.log("fblocal",fblocal);
	User.findOne({FBid: fblocal.userID}, function(err, user) {
		console.log("Error noted:", err);
		console.log("This User is:", user)
		var newUser = user.livingstyle
		User.find({}, function(error, users ) {

			if (error)
			{
				console.log(error);
			}
			else {
				var db_roomieList = new Array;
				for (var i = 0; i <users.length; i++)
					{
						db_roomieList[i] = users[i].livingStyle;
					}

				}
				findroomies(newUser, db_roomieList);
			});
	});
};

var matchArray= new Array;
var totalDiff = new Array;

// module.exports = function (app) {


	//  when clicked the "find roomie" button,

	// take the new user survey response and match with all existing

	// users and lifestyle's responses, find the best match

	// and provide the best match


//var roomieList // find all the existing users in database and access their response list



function findroomies (livingStyle, db_roomieList)

{
	for (var i = 0; i <db_roomieList.length; i++)

	{
	matchArray[i] = diffMaker(livingStyle,db_roomieList[i]);

	}

console.log("matchArray is " + matchArray);

console.log("matchArray is first one " + db_roomieList.indexOf(0));6

var sortedMatchArray = matchArray.sort(function (a, b) { return a - b;  });


for (var i = 0; i <db_roomieList.length; i++ )

	{
	var bestMatch = sortedMatchArray[i];

	console.log("best Roommate match is " + bestMatch);

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
