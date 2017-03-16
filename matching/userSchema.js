var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  FBid: {
    type: String,
  },
  FBName: {
    type: String,
  },
  FBEmail: {
    type: String
  },
  age: {
    type: Number,
    required: false
  },
  photolink: {
    type: String,
    required: false
  },
  friendList: {
    any: Object
  },
  livingStyle: {
    type: Array,
    required: false
  },
  regionDestination: {
    type: String,
    required: false
  },
  matchConnectionMin: {
    type: Number,
    required: true,
    // set:2
    default:2
  },
  roommateMatches: {
    any: Object
  }

});

var User = mongoose.model("user", UserSchema);

module.exports = User;
