const
    fs = require('fs'),
    readline = require('readline');

// �إ��ɮ�Ū����Ƭy
let inputStream = fs.createReadStream('test_readline.js');

// �NŪ����Ƭy�ɤJ Readline �i��B�z 
let lineReader = readline.createInterface({ input: inputStream });
lineReader.on('line', function(line) {

    // ���o�@��浲�G
    console.log('NEW LINE', line);
});