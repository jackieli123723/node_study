const
    path = require('path'),
    fs = require('fs');
    
fs.createWriteStream('test.txt')
    .end( (new Date()).toString(), 'utf-8');