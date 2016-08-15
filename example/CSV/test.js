const fs = require('fs'),
      readline = require('readline'),
      csv_parser = require('csv-parser');
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
    
    console.log('== csv-parse ==');
    fs.createReadStream('MOCK_DATA.csv')
      .pipe( csv_parser() )
      .on('data', (data)=>{
          console.log(data);
      });
      
}
    
main();