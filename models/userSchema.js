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
    any: Object
  }

});

var User = mongoose.model("user", UserSchema);

module.exports = User;
