const 
    ncp = require("copy-paste"),
    OpenCC = require('opencc');
    
// node_modules/opencc/data/config
let opencc = new OpenCC('s2twp.json'); 
// Sync API
// let converted = opencc.convertSync("汉字");
// console.log(converted);

// Async API
// opencc.convert("汉字", function (err, converted) {
let args = process.argv.slice(2);
opencc.convert(args[0], function (err, converted) {
  console.log(converted);
  ncp.copy(converted, function () {
      // complete...
    })
});
