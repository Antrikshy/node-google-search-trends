var http = require('http');
var parseString = require('xml2js').parseString;

var countryIds = require(require('path').resolve('lib', 'countries.json'));

module.exports = function(localization, count, callback) {
  var url = "http://www.google.com/trends/hottrends/atom/feed?pn=" + countryIds[localization.toLowerCase()];

  if (count > 20)
    count = 20;

  xmlFeedToJson(url, function(err, data) {
    var allFeedItems = data.rss.channel['0'].item;
    var toReturn = {};

    var i = 0;
    while (i < count) {
      toReturn[i] = allFeedItems[i];
      i++;
    }

    callback(err, toReturn);
  });
}

function xmlFeedToJson(url, callback) {
  var req = http.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    }); 

    res.on('timeout', function(e) {
      callback(e, null);
    }); 

    res.on('end', function() {
      parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
}
