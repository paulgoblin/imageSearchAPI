'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  User.find({}, (err, users) => {
    res.status(err ? 400 : 200).send(err || users);
  })
});

router.post('/', function(req, res, next) {
  User.create(req.body, (err, savedUser) => {
    res.status(err ? 400 : 200).send(err || savedUser);
  })
});

module.exports = router;
