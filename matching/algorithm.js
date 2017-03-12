
// module.exports = function (app) {


	//  when clicked the "find roomie" button,

	// take the new user survey response and match with all existing 

	// users and lifestyle's responses, find the best match

	// and provide the best match

var EU1= [5,5,5,5,2,5,5,5,5,5,5,5,5];

var EU2 = [2,2,2,2,2,2,2,2,2,2,2,2,2];

var EU3 = [3,3,3,3,3,3,3,2,2,2,2,2,2];

var newUser = [3,3,3,3,3,3,3,2,3,3,3,3,3];


var roomieList =[EU1,EU2,EU3];


var matchArray= new Array;
var totalDiff = new Array;


//var roomieList // find all the existing users in database and access their response list


findroomies(newUser);


function findroomies (newUserScore)

{
	for (var i = 0; i <roomieList.length; i++)

	{
	matchArray[i] = diffMaker(newUserScore,roomieList[i]);

	}

console.log("matchArray is " + matchArray);

var sortedMatchArray = matchArray.sort(function (a, b) { return a - b;  });


for (var i = 0; i <roomieList.length; i++ )

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











// app.post("/api/friends", function(req,res) {
//     var newFriend = req.body;
//     console.log(newFriend);
//     friendsList.push(newFriend);
//     console.log(friendsList);

//     //findfriend will search current friend and compare to new user score to get the match
//     var foundFriend = findfriend(req.body.scores);
//     res.json(foundFriend);  
// });

// var responseArray= new Array;
// var totalDiff = new Array;


// function findfriend (newUserScore)

// {
// 	for (var i = 0; i <friendsList.length-1; i++ )

// 	{
// 	responseArray[i] = diffMaker(newUserScore,friendsList[i].scores);

// 	}

// console.log("responseArray is " + responseArray);

// var lowestDiff = Math.min.apply(null,responseArray);

// var bestMatch = friendsList[responseArray.indexOf(lowestDiff)];

// var bestMatchName = friendsList[responseArray.indexOf(lowestDiff)].name;

// var bestMatchPhoto = friendsList[responseArray.indexOf(lowestDiff)].photo;

// console.log("best match is " +bestMatchName + "  "+bestMatchPhoto );

// return bestMatch;

// }


// function diffMaker(x,y)
// {
// 	for (var k =0; k<x.length; k++)
// 	{
// 		totalDiff[k] = Math.abs(x[k] - y[k]);
// 	}
// 	console.log("totalDiff is "+ totalDiff );
// 	var result = sumfunction(totalDiff);
// 	console.log("results is " + result);
// 	return result;

// }

// function sumfunction(x)  {
// 	var sum = x.reduce(add, 0);
// 		function add(a, b) {
// 	    return a + b;
// 		}
// 		console.log("sum is " + sum);
// 		return sum;
// }

// };