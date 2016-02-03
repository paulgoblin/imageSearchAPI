'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');

let clogs = [
  {
    name:"big clog",
  },
  {
    name:"average clog",
  },
  {
    name:"imaginary clog",
  },
  {
    name:"Not-your-moms Clog",
  },
  {
    name:"The Yeti clog",
  },
  {
    name:"Clog of Orion",
  },
  {
    name:"wooden clog",
  },
  {
    name:"small clog",
  },
  {
    name:"purple clog",
  },
  {
    name:"David Bowie's favourite clog",
  },
]

router.get('/', function(req, res, next) {
  let randomClogs = _.shuffle(clogs).slice(-4);
  res.json( randomClogs );
});

module.exports = router;
