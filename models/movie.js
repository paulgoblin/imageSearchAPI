'use strict';

const mongoose = require('mongoose');
const request = require('request');

var userData;

request('http://menavii.mybluemix.net/analyse?username=ladygaga', (err, resp, body) => {
  userData = JSON.parse(body);
})
// const userData = require('../data/ladygaga.json');


let Movie;

let movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  runtime: { type: String, default: '1 hour 53 minutes' },
  year: {type: Number},
  rating: {type: Number},
  data: {type: String}
});


function makePersonalityArr(str) {

  var obj = JSON.parse(str);
  var big5 = obj.children[0].children[0].children.map( child => child.percentage );
  var values = obj.children[2].children[0].children.map( child => child.percentage );
  return values.concat(big5);

}

function getMatchStrength(movieData, userData) {


  // var movieData = JSON.parse(movieData);
  // console.log(makePersonalityArr(movieData));
  var userPerson = makePersonalityArr(JSON.stringify(userData));
  var moviePerson = makePersonalityArr(JSON.stringify(userData));

  return Math.pow(userPerson.reduce((sum, el, i) => {
    return sum + Math.pow((el - moviePerson[i] + 1), 2);
  }, 0), 0.5)

}

movieSchema.statics.getMatches = function(cb){

  // Movie.find({}, (err, movies) => {
  //   movies = movies.map(movie => {
  //     movie = movie.toObject();
  //     movie.category = 'Comedy';
  //     movie.runtime = '1 hour, 45 minutes';
  //     movie.matchStrength = getMatchStrength(movie.data, userData);
  //     return movie
  //   })
  //   return cb(null, movies);
  // })


  var fakeData = [
    {
      title: "GhostBusters",
      matchStrength: 92,
      description: "An infectiously fun blend of special effects and comedy, with Bill Murray's hilarious deadpan performance leading a cast of great comic turns.",
      category: 'Comedy',
      runtime: '1 hour, 45 minutes',
      rated: 'PG'
    },
    {
      title: "Aliens",
      matchStrength: 88,
      description: "While Alien was a marvel of slow-building, atmospheric tension, Aliens packs a much more visceral punch, and features a typically strong performance from Sigourney Weaver.",
      category: 'Sci-fi',
      runtime: '2 hours, 18 minutes',
      rated: 'R'
    },
    {
      title: "STAR WARS: EPISODE VII - THE FORCE AWAKENS",
      matchStrength: 78,
      description: "Packed with action and populated by both familiar faces and fresh blood, The Force Awakens successfully recalls the series' former glory while injecting it with renewed energy.",
      category: 'Sci-fi',
      runtime: '2 hours, 16 minutes',
      rated: 'PG-13'
    }
  ]


  return cb(null, fakeData)

}

Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;



//
