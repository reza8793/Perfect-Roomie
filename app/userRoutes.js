var UserModel = require("../matching/userSchema.js");


module.exports = function (router) {


router.post('/responses', function(req, res) {

  // console.log(req.body.livingStyle);

	var age = req.body.age;
	var livingStyle = req.body['livingStyle[]'];
 

	var roomie = new UserModel({ age:age,livingStyle:livingStyle});
  
	roomie.save(function(error, result){

    if (error){
      console.log(error);
      return res.status(500).send({error: 'AN_ERROR_OCCURED'});
    }

         res.send(result);

  });

	//console.dir(req.body);
    
});



router.post('/responses', function(req, res) {

  var regionDestination = req.body.zipValue;

  var roomie = new UserModel({regionDestination:regionDestination});
  
  roomie.save(function(error, result){

    if (error){
      console.log(error);
      return res.status(500).send({error: 'AN_ERROR_OCCURED'});
    }

         res.send(result);

  });


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



