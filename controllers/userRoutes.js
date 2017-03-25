console.log('using userRoutes.js');

module.exports = function(router) {

  var User = require("../models/userSchema");
  var fblocal = require('../controllers/fblocal');
  var FB = require('fb');
  var fb = new FB.Facebook({version: 'v2.8'});
  var moment = require('moment');
//  var algorithmInitializer = require("./algorithm.js");

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
      // Send any errors to the browser
      
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
       //console.log("doc", doc);
       //console.log("roommateMatches", doc[0]._id);

        for (var i = 0; i < doc[0].roommateMatches.length; i++) {

          console.log('FBName:', doc[0].roommateMatches[i].FBName);
          console.log('diffScore:', doc[0].roommateMatches[i].diffScore);
          console.log('photolink:', doc[0].roommateMatches[i].photolink);
        }

        res.send(doc);
        
      }
      
    });

  });


  router.get("/db/friendsInCommon", function(req, res){
    //do nothing
    res.send(200);
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


///ABSTRACT THIS BACK OUT TO ALGORITHM.JS

  function algorithmInitializer() {
    // console.log("fblocal",fblocal);
    User.findOne({FBid: fblocal.userID}, function(err, user) {
      console.log("Null OK, Otherwise Error noted:", err);
      console.log("This User is:", user.FBName);
      var currentUserLivingStyle = user.livingStyle;
      var currentUserFriendListArray = arrayifyFriendList(user.friendList);

      console.log("The newUser is: " + currentUserLivingStyle);
      //console.log("currentUserFriendListArray: " + currentUserFriendListArray);
      User.find({ FBid: { $ne: fblocal.userID } }, function(error, users ) {

        if (error)
        {
          console.log("algorithmInitializer is having the issue: " +error);
        }
        else {
          var db_roomieList = new Array;
          for (var i = 0; i < users.length; i++) {

            var targetUserFriendListArray = arrayifyFriendList(users[i].friendList);
            var mutualFriendsArray = currentUserFriendListArray.mutual(targetUserFriendListArray);

            //console.log('mutual friends:', mutualFriendsArray);

            var roomieListObj = {
              FBid: users[i].FBid,
              FBName: users[i].FBName,
              FBEmail: users[i].FBEmail,
              age: users[i].age,
              livingStyle: users[i].livingStyle,
              photolink: users[i].photolink,
              mutualFriends: mutualFriendsArray
            }

            db_roomieList.push(roomieListObj);

          }

        }
        findroomies(currentUserLivingStyle, db_roomieList);

      });
    });
  };



  function findroomies (livingStyle, db_roomieList)
  {
    console.log('FINDROOMMIES:')
    var matchArray = new Array;

    for (var i = 0; i <db_roomieList.length; i++)
    {

      var expandedMutual = mutualFriendsExpander(db_roomieList[i].mutualFriends, function() {
        console.log('expandedMutual', expandedMutual);  
      });
      

      var matchArrayObj = {
        userID: db_roomieList[i].FBid,
        FBName: db_roomieList[i].FBName,
        FBEmail: db_roomieList[i].FBEmail,
        age: db_roomieList[i].age,
        diffScore: diffMaker(livingStyle,db_roomieList[i].livingStyle),
        photolink: db_roomieList[i].photolink,
        mutualFriends: db_roomieList[i].mutualFriends
        //mutualFriends: mutualFriendsExpander(db_roomieList[i].mutualFriends)

      }

      matchArray.push(matchArrayObj);

    }

    //sort your matcharray by scores ascending
    matchArray.sort(function(a, b) {
        // {"roommateMatches.diffScore" : "desc"}
        if (a.diffScore < b.diffScore) {
          return -1;
        }
        if (a.diffScore > b.diffScore) {
          return 1;
        }

        return 0;
      });

    console.log(matchArray);
    console.log('userid', fblocal.userID)

    User.findOneAndUpdate(
        { FBid: fblocal.userID },
        { roommateMatches: matchArray }
      ).exec(function(error, doc) {
        // Send any errors to the browser
        if (error) {
          console.log(error);
        }
        // Or send the doc to the browser
        else {
          console.log(doc);
        }
      });


  }


  function diffMaker(x,y) {
    var totalDiff = new Array;

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


  function getMutuals(array1, array2) {
    array1.mutual(array2);
  }

  function arrayifyFriendList(friendList) {
    var returnArray = new Array;

    for (var i = 0; i < friendList.length; i++) {
      returnArray.push(friendList[i].id);
    }

    return returnArray;
  }

  function mutualFriendsExpander(mutualFriendsArray) {

    console.log("mutualFriendsArray", mutualFriendsArray)

    var expandedArray = new Array;

    for (i = 0; i < mutualFriendsArray.length; i++) {
      var expandedValues = getFBInfoByID(mutualFriendsArray[i]);

      console.log('expanded values', expandedValues);

    /*  var expandedObject = {
        FBid: expandedValues.id,
        FBName: expandedValues.name,
        photolink: expandedValues.picture.data.url,
        FBEmail: expandedValues.email
      }

      expandedArray.push(expandedObject);*/
    }

    console.log("expandedArray:", expandedArray);

    return expandedArray;
  }

  
  //moved to userRoutes. Needs FB
  function getFBInfoByID(id) {
    var query = id + "?fields=id,name,picture{url},email";

      FB.api(query, { access_token: fblocal.appAccessToken}, function (res) {
          if(!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
          }

          console.log("getFBInfoByID", res);
        return res;
      });

  }
  

  Array.prototype.mutual = function(arr2) {
    var ret = new Array;
    for (var i in this) {
      if(arr2.indexOf( this[i]) > -1) {
        ret.push( this[i] );
      }
    }
    return ret;
  };



};
