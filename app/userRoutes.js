console.log('using userRoutes.js');
var moment = require('moment');


module.exports = function(router) {

  var User = require("../models/userSchema");
  var fblocal = require('../controllers/fblocal');
  var FB = require('fb');
  var fb = new FB.Facebook({version: 'v2.8'});

  //test function. Don't call this unless you need to see derp
  router.get("/derp", function(req, res) {
    fblocal.printDerp();
    res.sendStatus(200);
  });

  router.get("/fb/friends", function(req, res) {
    FB.api("me?fields=friends{id}", { access_token: fblocal.appAccessToken}, function (res) {
    	if(!res || res.error) {
    		console.log(!res ? 'error occurred' : res.error);
    		return;
  		}
  		
    	console.log(res.friends.data);
  	});
    res.sendStatus(200);
  });

  router.post("/fb/userIDToken", function(req, res) {
    fblocal.updateUserID(req.body.userID);
    fblocal.updateToken(req.body.token);
   	res.sendStatus(200);
   
  });


  router.post("/db/userInsert", function(req, res) {

    FB.api("me?fields=id,name,friends,picture{url},email,birthday", { access_token: fblocal.appAccessToken}, function (res) {
      	if(!res || res.error) {
        	console.log(!res ? 'error occurred' : res.error);
        	return;
      	}
      	
      	var stringDOB = moment(res.birthday);
      	var age = moment().diff(stringDOB, 'years');

      	User.findOneAndUpdate(
      		{	FBid: res.id 	}, 
      		{
        		FBName: res.name,
        		photolink: res.picture.data.url,
        		FBEmail: res.email,
        		friendList: res.friends.data,
        		age: age
        	}, 
        	{
        		upsert: true
        	}, 
        	function(err, doc) {
      			if(err) {
        			console.log(!res ? 'error occurred' : res.error);
        			return;
        		}
        		else {
        			console.log('updating:', doc);
        		}
        });
    });
    res.sendStatus(200);

  });


}