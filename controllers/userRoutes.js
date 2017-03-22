console.log('using userRoutes.js');

module.exports = function(router) {

  var User = require("../models/userSchema");
  var fblocal = require('../controllers/fblocal');
  var FB = require('fb');
  var fb = new FB.Facebook({version: 'v2.8'});
  var moment = require('moment');
  var algorithmInitializer = require("./algorithm.js");

  router.get("/", function(req, res) {
    res.send(index.html)
  });

  //test function. Don't call this unless you need to see derp
  router.get("/derp", function(req, res) {
    fblocal.printDerp();
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
            { FBid: res.id  },
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

  router.post("/db/userSurveyRandom", function(req, res){

    var seedArray = new Array();

    for (var i = 0; i < 10; i ++) {
      seedArray.push( Math.floor( Math.random() * 5 ) + 1 );
    }

    User.findOneAndUpdate(
      { FBid: fblocal.userID },
      { livingStyle: seedArray }
    ).exec(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
        res.send(doc);
      }
    });

  });


  router.post("/db/userSurvey", function(req, res){

    var seedArray = req.body.surveyResult;


    User.findOneAndUpdate(
      { FBid: fblocal.userID },
      { livingStyle: seedArray }
    ).exec(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
        algorithmInitializer();
        res.send(doc);
      }
    });

  });


  router.put('db/user/destination', function(req, res) {

    var regionDestination = req.body.zipValue;

    var roomie = new UserModel({regionDestination:regionDestination});

    roomie.save(function(error, result){

      if (error){
        console.log(error);
        return res.status(500).send({error: 'AN_ERROR_OCCURED'});
      }

           res.json({success:true});

    });


  });

router.put("db/user/response", function(req, res) {
    var age = req.body.age;
    var livingStyle = req.body['livingStyle[]'];

    User.findOneAndUpdate({"FBid": fblocal.userID}),
    {
      livingStyle: livingStyle,
      age: age
    },
    function(err, user) {
      if (err) {
        console.log("Something's wrong. Error data:" + err);
        return;
      }
      if (!user) {
        console.log("No User found");
        return;
      }

    }

  });

};
