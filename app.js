'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

var app = express();

// GENERAL MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

// ROUTES
app.use('/image', require('./routes/image.js'));
app.use('/clogs', require('./routes/clogs.js'));

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});
