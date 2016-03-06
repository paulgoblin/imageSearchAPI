'use strict';

var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');

router.get('/', function(req, res, next) {
  Movie.find({}, (err, movies) => {
    res.status(err ? 400 : 200).send(err || movies);
  })
});

router.post('/', function(req, res, next) {
  Movie.create(req.body, (err, savedMovie) => {
    res.status(err ? 400 : 200).send(err || savedMovie);
  })
});

router.get('/matches', function(req, res, next) {
  Movie.getMatches((err, matches) => {
    res.status(err ? 400 : 200).send(err || matches);
  })
});

module.exports = router;
