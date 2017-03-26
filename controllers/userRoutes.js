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


  router.get("/fb/getUserInfo", function(req, res) {
      FB.api("me?fields=id, name", { access_token: fblocal.appAccessToken}, function (res) {
        if(!res || res.error) {
          console.log(!res ? 'error occurred' : res.error);
          return;
        }

        console.log(res);
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
        //turn this off for demo
        //algorithmInitializer();
        res.send(doc);
      }
    });

  });

  router.post("/db/updateRoomieMatch", function(req, res){
    algorithmInitializer();
    res.send(200);
  });



  router.get("/db/getRoomieMatch", function(req, res){

    var query = User.find({FBid: fblocal.userID }).select("roommateMatches");

    query.exec(function(error, doc) {
      //  console.log("doc is " , doc);
      // Send any errors to the browser
      
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
       console.log("doc", doc);
       console.log("roommateMatches", doc[0]._id);
/*        for (var i = 0; i < doc[0].roommateMatches.length; i++) {

          console.log('FBName:', doc[0].roommateMatches[i].FBName);
          console.log('diffScore:', doc[0].roommateMatches[i].diffScore);
          console.log('photolink:', doc[0].roommateMatches[i].photolink);

        
        
        }*/
        res.send(doc);
    }

    });
 });

  router.get("/db/friendsInCommon", function(req, res){
    //do nothing
    res.send(200);
  });



  // router.get("/db/roomieMatch1", function(req, res){
  //   console.log("i'm at router.get roomieMatch");
  //   var query = User.find({FBid: fblocal.userID });

  //   query.exec(function(error, doc) {

  //       console.log("doc in roomieMatch1 is " , doc);
  //     // Send any errors to the browser
  //     if (error) {
  //       res.send(error);
  //     }
  //     // Or send the doc to the browser
  //     else {
      

  //       res.send(doc);
  //     }
  //   });

  // });


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
