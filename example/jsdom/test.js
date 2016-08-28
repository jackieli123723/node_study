const
    jsdom = require('jsdom');
    
jsdom.env({
  url: "https://www.google.com.tw/search?q=jsdom",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (err, window) {
    let $ = window.$;
    $("div.g h3.r > a").each(function() {
      console.log(" -", $(this).text(), $(this).attr('href'));
    });
  }
});