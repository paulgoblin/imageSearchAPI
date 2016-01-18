var request = require('request');

module.exports = {
  test: "this is a test",
  getStuff: function(queryString, cb){
    request.get('https://thepiratebay.se/top', function(err, res, html){
      console.log("res!!!!!!!", html);
      cb(html);
    })
  }
}
