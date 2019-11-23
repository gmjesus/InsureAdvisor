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
  Citizenship: {
    type: String,
    required: 'Enter your citzenship status'
  },
  InsuranceTypes: [{
    type: String,
    required: 'Enter the insurance types'
  }],
  MaxLimit: {
    type: Number,
    required: 'Enter your maximum monthly limit'
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