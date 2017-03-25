var fblocal = require("../../../controllers/fblocal.js");
var axios = require("axios");

var fbAPIhelper = {
    statusChangeCallback: function(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          //postStuff(response.authResponse.accessToken);
          console.log('userID:', response.authResponse.userID);
          console.log('accessToken:', response.authResponse.accessToken);
          fbAPIhelper.userTokenLogin(response.authResponse.userID, response.authResponse.accessToken);

        } else {
          // The person is not logged into your app or we are unable to tell.
          document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
        }
      },

      // This function is called when someone finishes with the Login
      // Button.  See the onlogin handler attached to it in the sample
      // code below.
       checkLoginState: function() {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
      },

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
     testAPI: function() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
          document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });
    },

     userTokenLogin: function(passedUserID, passedToken) {
       console.log("axios being used");
      axios({
        method: "POST",
        url: "/fb/userIDToken",
        data: {
        // Value taken from title input
          userID: passedUserID,
          token: passedToken
        // Value taken from note textarea
        }
      })
      // With that then
      .then(function(data) {
          // Log the response
          console.log("stuff posted", data);
          fbAPIhelper.upsertUser();
      });

    },

     upsertUser: function() {
      axios({
      method: "POST",
      url: "/db/userInsert"
    }).then(function(data) {
        console.log("upserted user", data);
      })
    }
};
module.exports = fbAPIhelper;
