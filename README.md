node-google-search-trends
=========================

Node module to grab Google's trending searches from the official Atom feed. It returns data more or less identical to [this page](http://www.google.com/trends/hottrends), using any localized version of [this feed](www.google.com/trends/hottrends/atom/feed?pn=p1), without all the clutter that comes with XML feeds.

Contact me [@Antrikshy](http://twitter.com/Antrikshy) with any questions, feedback or bugs.

Usage
-----

As always, install using:

    npm install node-google-search-trends [--save]

The module comes with one exposed function. It takes three parameters - `localization`, `count` and `callback`. Example usage:

    var trends = require('node-google-search-trends');
    trends('Singapore', 10, function(err, data) {
        if (err) return console.err(err);
        console.log(JSON.stringify(data, null, 2));  // Pretty prints JSON 'data'
    });

Google seems to return a maximum of 20 recent trends, so `count` cannot be greater than 20.

Here's an example of the `data` object:

    {
      '0': {
        title: [
          'Comcast'
        ],
        description: [
          ''
        ],
        link: [
          'http://www.google.com/trends/hottrends?pn=p1#a=20150327-Comcast'
        ],
        pubDate: [
          'Fri, 27 Mar 2015 00:00:00 -0700'
        ],
        'ht:picture': [
          '//t2.gstatic.com/images?q=tbn:ANd9GcQ336KOFcezbrMJXlGqQ0wko4C1RjXwhLCS-zYLh0SJB_i_qdiYej-mNPKG4pv-SipOZK8K7daS'
        ],
        'ht:picture_source': [
          'Gawker'
        ],
        'ht:approx_traffic': [
          '50,000+'
        ],
        'ht:news_item': [
          [Object],
          [Object]
        ]
      }
    }

Potentially useful items are `title` (the actual trending keyword), `link` (to the Trends page), `pubDate` (when the trending item was added to the feed). `ht:picture` is an image automatically assigned to the trend, displayed on the Trends site linked above. 

Contribute
----------

It's a pretty simple module to contribute to. Just clone the repo and make a script inside the folder to test responses. Any fixes, cleanup etc. are always appreciated.

If you know of a way to request more than 20 items from Google, please add the feature.
