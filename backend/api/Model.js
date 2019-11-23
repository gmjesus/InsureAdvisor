'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: {
    type: String,
    required: 'Enter the full name'
  },
  Age: {
    type: Number,
    required: 'Enter the age of user'
  },
  Email: {
    type: String,
    required: 'Enter email of user'
  },
  IsCanadianCitizen: {
    type: Boolean,
    required: 'Are you citzenship status'
  }
});

module.exports = mongoose.model('Users', UserSchema);