const tar = require('tar'),
      fstream = require('fstream'),
      fs = require('fs');
      
function tar_folder(){
    let target = fs.createWriteStream('test.tar');
    let packer = tar.Pack({noProprietary: true});
    let dir = fstream.Reader({path: __dirname +'/node_modules', Directory: true});
    dir.on('entry', (entry) =>{
        console.log(entry.path);
    });
    dir.on('error', (err)=>{
        console.log(err);
    });
    dir.pipe(packer).pipe(target);
}

function untar_folder(){
    let source = fs.createReadStream('test.tar');
    let extractor = tar.Extract({path: __dirname + '/extract'});
    source.pipe(extractor);
}
    
function main(){
    // tar_folder();
    untar_folder();
}
    
    
main();