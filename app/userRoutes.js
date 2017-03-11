

//var responseSurvey = require("./public/assets/javascript/frontEnd.js");

// var express = require("express");
// var app = express();






module.exports = function (router) {

router.get('/blah', function(req,res){

			res.send("hello world!");

			});

router.post('/responses', function(req, res) {

	console.log(req.body);

	res.send(req.body);
    
});



console.log('using userRoutes.js');



  var fblocal = require('../controllers/fblocal');
  var FB = require('fb');
  var fb = new FB.Facebook({version: 'v2.8'});

  //test function. Don't call this unless you need to see derp
  router.get("/derp", function(req, res) {
    fblocal.printDerp();
  });

  router.post("/fb/userIDToken", function(req, res) {
    fblocal.updateUserID(req.body.userID);
    fblocal.updateToken(req.body.token);

  });

  router.get("/fb/friends", function(req, res) {
    FB.api('me/friends', { access_token: fblocal.appAccessToken}, function (res) {
    	if(!res || res.error) {
    		console.log(!res ? 'error occurred' : res.error);
    		return;
  		}
  		
    	console.log(res.data);
  	});
    res.send(200);
  });
}



