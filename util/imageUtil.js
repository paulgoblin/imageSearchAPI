var request = require('request');
var cheerio = require('cheerio');

module.exports = {
  getThumbnail: function(queryString, cb){
    request.get(`https://www.google.com/search?q=${queryString}&safe=on&tbm=isch`, function(err, res, html){
      var $ = cheerio.load(html);
      var thumbnail = $($('img')[0]).attr('src');
      cb(thumbnail);
    })
  }
}
