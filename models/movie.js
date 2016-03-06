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

movieSchema.statics.getMatches = function(cb){
  let data = [
        {
          title: "GhostBusters",
          match: 92,
          description: "An infectiously fun blend of special effects and comedy, with Bill Murray's hilarious deadpan performance leading a cast of great comic turns.",
          category: 'Comedy',
          runtime: '1 hour, 45 minutes',
          rated: 'PG'
        },
        {
          title: "Aliens",
          match: 88,
          description: "While Alien was a marvel of slow-building, atmospheric tension, Aliens packs a much more visceral punch, and features a typically strong performance from Sigourney Weaver.",
          category: 'Sci-fi',
          runtime: '2 hours, 18 minutes',
          rated: 'R'

        }
      ];

  return cb(null, data);
}

Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;