node-google-search-trends
=========================

Node.js module to grab Google's trending searches from the official Atom feed. It returns data more or less identical to [this page](http://www.google.com/trends/hottrends), using any localized version of [this feed](http://trends.google.com/trends/hottrends/atom/feed?pn=p1), without all the clutter that comes with XML feeds.

This module was written to pull interesting discussion topics into [Quibbler](http://quibbler.co). It is intended for use in similar use cases, like in an application that can benefit from having a list of trending topics (that only needs to change occasionally). But feel free to try out innovative things with it.

Contact me [@Antrikshy](http://twitter.com/Antrikshy) with any questions, feedback or bugs.

>Note: This module does *not* let you analyze Google Trends data for specific keywords, and nor does it provide you their search trends over time. This is just a simple tool to get keywords from Google's "Trending Searches" (which may get rebranded over time, and I will try to keep this notice up to date to avoid confusion) so you don't have to parse the feed yourself.

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

Google only seems to store a maximum of 20 recent trends, so `count` is capped at 20. Also, the serial order of search trends on the website may differ from returned data, because that's how Google's feed is.

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

It's a pretty simple module to contribute to, if you know Node.js basics. Just clone the repo and make a script inside the folder to test responses using `require('./trends.js')`. Any fixes, cleanup or new features are always appreciated.
