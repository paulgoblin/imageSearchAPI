'use strict';

const mongoose = require('mongoose')

let Movie;

let movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  length: { type: String, default: '1 hour 53 minutes' },
  year: {type: Number},
  rating: {type: Number}
});

Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
