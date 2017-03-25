import React, { Component } from 'react';
import styles from './Home.css';
import axios from 'axios';
import fbAPIhelper from '../components/utils/fbAPIhelper.js';
import { Link } from 'react-router';
import imgUrl from './roomie.jpg';


const fbButtonStyle = {
  margin: "auto"
};

//"url(" + Background + ")"

const roomieDiv = {
  color: 'white',
  backgroundImage: "url(" + {imgUrl} + ")",
  fontSize: "48",
  //display: "inline-block",
  margin: "auto"
};


const formDiv = {
  color: 'black',
  backgroundImage: "url(" + {imgUrl} + ")",
  fontSize: "20",
  //width: "40",
  //display: "inline-block",
  margin: "auto",

  textAlign: "center" 
};

class Home extends Component {


	

	constructor(){
		super();
		this.state = {
			text: "initial text"
		};
	}

	clicked() {
		this.setState ({ text:this.refs.textBox.value});
		window.location = '/#/survey';
	}


componentDidMount() {
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '256928438051566',
			cookie     : true,  // enable cookies to allow the server to access
			// the session
			xfbml      : true,  // parse social plugins on this page
			version    : 'v2.1' // use version 2.1
		});

		// Now that we've initialized the JavaScript SDK, we call
		// FB.getLoginStatus().  This function gets the state of the
		// person visiting this page and can return one of three states to
		// the callback you provide.  They can be:
		//
		// 1. Logged into your app ('connected')
		// 2. Logged into Facebook, but not your app ('not_authorized')
		// 3. Not logged into Facebook and can't tell if they are logged into
		//    your app or not.
		//
		// These three cases are handled in the callback function.
		// login callback implementation goes inside the function() { ... } block
	 FB.Event.subscribe('auth.statusChange', function(response) {
		 // example implementation
		 if (response.authResponse) {
			 console.log('Welcome!  Fetching your information.... ');
			 FB.api('/me', function(response) {
				 console.log('Good to see you, ' + response.name + '.');
				 FB.getLoginStatus(function(response) {
					 console.log("Response fed into statusChange: ", response);
					 fbAPIhelper.statusChangeCallback(response);
		 		 });
			 });
		 } else {
			 console.log('User cancelled login or did not fully authorize.');
			 fbAPIhelper.statusChangeCallback(response);
		 }
	 });
 }.bind(this);

	// Load the SDK asynchronously
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name);
  document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';
  });
}

// This is called with the results from from FB.getLoginStatus().
statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
      userTokenLogin(response.authResponse.userID, response.authResponse.accessToken);
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }
}

userTokenLogin(passedUserID, passedToken) {
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
  // With that done
  .done(function(data) {
      // Log the response
      console.log("stuff posted", data);
      upsertUser();
  });

}

upsertUser() {
  axios({
  method: "POST",
  url: "/db/userInsert"
}).done(function(data) {
    console.log("upserted user", data);
  })
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
checkLoginState() {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  }.bind(this));
}







handleClick() {
  FB.login(this.checkLoginState());
}
	render() {
		return (
			<div style={roomieDiv} className="roomieDiv">

				<h1>Perfect Roomie</h1>
				<h4> Looking for a compatible roommate through mutual friends ? Look no further </h4>
				<h4> Find your ideal roommate now !</h4>
				<div className="page-header">

				</div>

				
			<div style={formDiv} className="formDiv">

				<input ref="textBox" type="text" />

				<p></p>

				</div>

				<p>

					<button type="button" className="btn btn-lg btn-primary" onClick={ (e) => {this.clicked();}}> Enter Your location</button>
				</p>

		{/*<button type="button"  //fb-login-button   className={styles.btnlocation} onClick={ (e) => {this.clicked();}}> Enter Your location</button>*/}




				{/* FB login button area */}

					<div className="row">
					<div className="col-offset-2 col-lg-8">
						<div  style={fbButtonStyle} className="fb-login-button" data-size="xlarge" data-auto-logout-link="true"></div> 

						 
						
					</div>
				</div>


			</div>
		);

	}
}

export default Home;
