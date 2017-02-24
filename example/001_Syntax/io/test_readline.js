const
    fs = require('fs'),
    readline = require('readline');

// 建立檔案讀取資料流
let inputStream = fs.createReadStream('test_readline.js');

// 將讀取資料流導入 Readline 進行處理 
let lineReader = readline.createInterface({ input: inputStream });
lineReader.on('line', function(line) {

    // 取得一行行結果
    console.log('NEW LINE', line);
});