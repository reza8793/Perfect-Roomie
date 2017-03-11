User = require("./userSchema.js");

var Kenny = new User({FBName: "Kenny", FBEmail: "test@email "})

var names = ["Kenny", "Gary", "Fiona", "Johnny", "Frank", "Darnell", "Joey", "Rickal"];

var emails = [];

function makeEmails() {
  for (var i=0; i < 9; i++) {
    email = "test"+[i]+"@email.com";
    emails.push(email);
  }
};

var ages = [];

function generateAges() {
  for (var i=0; i < 9; i++) {
    age = Math.floor(Math.random() * (34 - 19 + 1)) + 19;
    ages.push(age);
  }
};

var profilePic = "http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png";

var friendsArray = [];

function randomFriends() {
  for (var i=0; i < names.length; i++) {

  }
}
