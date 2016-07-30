let fs = require('fs'),
    readline = require('readline');
// [Parsing a CSV File With JavaScript](http://code.tutsplus.com/tutorials/parsing-a-csv-file-with-javascript--cms-25626)
function readcsv(fn, callback){
    let fin = fs.createReadStream(fn, {
        encoding : 'utf-8',
        autoClose: true
    });
    readline.createInterface({
        input: fin
    }).on('line', (line) => {
        let cells = line.split(',');
        callback(cells);
    });
} 

function main(){
    readcsv('MOCK_DATA.csv', console.log)
}
    
main();