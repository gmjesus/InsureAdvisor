'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users'),
  Advisor = mongoose.model('Advisors');

// USERS

exports.list_all_users = (req, res) => {
  User.find({}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = (req, res) => {
  var new_user = new User(req.body);
  new_user.save((err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, {new: true}, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = (req, res) => {
  User.remove({ _id: req.params.userId }, (err, user) => {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};

// ADVISORS

exports.list_all_advisors = (req, res) => {
  Advisor.find({}, (err, advisor) => {
    if (err)
      res.send(err);
    res.json(advisor);
  });
};

exports.create_a_advisor = (req, res) => {
  var new_advisor = new Advisor(req.body);
  new_advisor.save((err, advisor) => {
    if (err)
      res.send(err);
    res.json(advisor);
  });
};

exports.read_a_advisor = (req, res) => {
  Advisor.findById(req.params.advisorId, (err, advisor) => {
    if (err)
      res.send(err);
    res.json(advisor);
  });
};

exports.update_a_advisor = (req, res) => {
  Advisor.findOneAndUpdate({ _id: req.params.advisorId }, req.body, {new: true}, (err, advisor) => {
    if (err)
      res.send(err);
    res.json(advisor);
  });
};

exports.delete_a_advisor = (req, res) => {
  Advisor.remove({ _id: req.params.advisorId }, (err, advisor) => {
    if (err)
      res.send(err);
    res.json({ message: 'Advisor successfully deleted' });
  });
};