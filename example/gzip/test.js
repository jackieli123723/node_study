const zlib = require('zlib'),
      fs = require('fs');
      
function compress_file(fn){
    let gzip = zlib.createGzip();
    let source = fs.createReadStream(fn);
    let target = fs.createWriteStream(fn+'.gz');
    source.pipe(gzip).pipe(target);
}

function decompress_file(fn){
    let ungzip = zlib.createGunzip();
    let source = fs.createReadStream(fn);
    let target = fs.createWriteStream(fn+'.restore');
    source.pipe(ungzip).pipe(target);
}

function data_compress(){
    let data = new Buffer('hello Arick');
    let enc = zlib.deflate(data, (err, enc)=>{
        zlib.inflate(enc, (err, dec)=>{
            console.log(dec.toString());
        }); 
    });
}

function main(){
    // compress_file( __dirname + '/test.js');
    // decompress_file( __dirname + '/test.js.gz');
    data_compress();
}

main();
