var express = require('express');
var router = express.Router();
var imageUtil = require('../util/imageUtil')

router.get('/thumbnail/:query', function(req, res, next) {
  imageUtil.getThumbnail(req.params.query, function(url){
    res.json({ thumbnailUrl: url });
  })
});

module.exports = router;
