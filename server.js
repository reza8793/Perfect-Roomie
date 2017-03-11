
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// var Note = require("./models/Note.js");
// var Article = require("./models/Article.js");

var request = require("request");
var cheerio = require("cheerio");

var app = express();


var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
