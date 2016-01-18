var express = require('express');
var router = express.Router();
var imageUtil = require('../util/imageUtil')

router.get('/:query', function(req, res, next) {
  imageUtil.getStuff(null, function(html){
    console.log("GOT SOME MUTHAFUCKING HTML");
    res.json({ message: html });
  })
});

module.exports = router;
