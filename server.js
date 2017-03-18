// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var FB = require('fb');
var PORT = process.env.PORT || 3000;

mongoose.Promise = Promise;

// Initialize Express
var app = express();

var router = express.Router();
require("./controllers/userRoutes")(router);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded( {extended: false }));
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/roomie_db";



// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.json());

// 				if (error) 
// 					{
// 		     		 console.log(error);
// 		    		}
// 			    else {
// 				    	for (var i = 0; i <users.length; i++)
// 				    	{
// 				    		db_roomieList[i] = users[i].livingStyle;
// 				    	}

// 			    	}
// 	});


app.use(bodyParser.urlencoded( {extended: false }));

// Make public a static dir
app.use(express.static("public"));
app.use(router);

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);



});


module.exports = db;
  
 