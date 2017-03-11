var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  FBid: {
    type: String,
  }
  FBName: {
    type: String,
  },
  FBEmail: {
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  photolink: {
    type: String,
    required: true
  },
  friendList: {
    any: Object
  },
  livingStyle: {
    type: Array,
    required: true
  },
  regionDestination: {
    type: String,
    required: true
  },
  matchConnectionMin: {
    type: Number,
    required: true,
    set: 2
  },
  roommateMatches: {
    any: Object
  }

});

var User = mongoose.model("user", UserSchema);

module.exports = User;
