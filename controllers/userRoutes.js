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
