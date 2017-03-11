console.log('using fblocal.js');

var fbLocal = {

	appSecret: '0e0af4d3c10950538896c2e47baa6b6a',
	appID: '256928438051566',
	appAccessToken: '',
	userID: '',

	printDerp: function() {
		console.log('derp');
	},

	printToken: function(myToken) {
		console.log("token:", myToken);
	},

	printUserID: function(myUserID) {
		console.log("userID:", myUserID);
	},

	updateToken: function(myToken) {
		this.appAccessToken = myToken;
		this.printToken(this.appAccessToken);
	},

	updateUserID: function(myUserID) {
		this.userID = myUserID;
		this.printUserID(this.userID);
	}

}

module.exports = fbLocal;
