

// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");

var Promise = require("bluebird");
var FB = require('fb');

mongoose.Promise = Promise;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

var fb = new FB.Facebook({version: 'v2.8'});


var appSecret = '0e0af4d3c10950538896c2e47baa6b6a';
var appID = '256928438051566';
var appAccessToken = '';

var fooApp = FB.extend({appId: appID, appSecret: appSecret });

//FB.setAccessToken(appAccessToken);

var myAccessToken = FB.getAccessToken();

console.log('my access token', myAccessToken);

function printDerp() {
	console.log('derp');
}

function printToken(myToken) {
	console.log("token:", myToken);
}

function updateToken(myToken) {
	appAccessToken = myToken;
}




/*
FB.api('oauth/access_token', {
    client_id: appID,
    client_secret: appSecret,
    redirect_uri: 'https://www.facebook.com/app_scoped_user_id/127970024394905/'

}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
 
    var accessToken = res.access_token;
    var expires = res.expires ? res.expires : 0;
});


FB.getAuthResponse();*/



//test function. Don't call this unless you need to see derp
app.get("/derp", function(req, res) {
  printDerp();
});

app.post("/fb/:token", function(req, res) {
	//console.log('req.body.token');
  	updateToken(req.body.token);
});

app.get("/fb/friends", function(req, res) {
  FB.api('me/friends', { access_token: appAccessToken}, function (res) {
  	if(!res || res.error) {
  		console.log(!res ? 'error occurred' : res.error);
  		return;
		}
		
  	console.log(res.data);
	});
  res.send(200);
});

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
