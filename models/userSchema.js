var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  FBid: {
    type: String,
    required: true,
    unique: true
  },
  FBName: {
    type: String,
    required: true
  },
  FBEmail: {
    type: String
  },
  age: {
    type: Number

  },
  photolink: {
    type: String//,
//    required: true
  },
  friendList: {
    type: Array
  },
  livingStyle: {
    type: Array//,
//    required: true
  },
  regionDestination: {
    type: String//,
//    required: true
  },
  matchConnectionMin: {
    type: Number//,
//    required: true,
//    set: 2
  },
  roommateMatches: {
    type: Array
  }

});

var User = mongoose.model("User", UserSchema);

module.exports = User;
