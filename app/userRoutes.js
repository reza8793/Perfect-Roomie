
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

}


