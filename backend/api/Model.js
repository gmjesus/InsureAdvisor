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
  },
  InsuranceType: {
    type: String,
    required: 'Enter the insurance type'
  }
});

var AdvisorSchema = new Schema({
  Name: {
    type: String,
    required: 'Enter the full name'
  },
  Email: {
    type: String,
    required: 'Enter email of advisor'
  },
  Password: {
    type: String,
    required: 'Enter password of advisor'
  }
});

module.exports = mongoose.model('Advisors', AdvisorSchema);
module.exports = mongoose.model('Users', UserSchema);