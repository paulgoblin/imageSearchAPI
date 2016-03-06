'use strict';

const mongoose = require('mongoose')

let User;

let userSchema = mongoose.Schema({
  name: {type: String},
  data: {type: String}
});

User = mongoose.model('User', userSchema);
module.exports = User;
