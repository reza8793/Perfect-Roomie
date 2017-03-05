var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  FBName: {
    type: String,
  },
  FBemail: {
    type: String
  }
  age: {
    type: Number,
    required: true
  },
  photolink: {
    type: String,
    required: true
  },
  friendlist: {
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
  }
  roommateMatches: {
    any: Object
  }

});

var Article = mongoose.model("user", UserSchema);

module.exports = UserSchema;
