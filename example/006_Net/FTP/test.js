const fork = require('child_process').fork;
      fs = require('fs'),
      FTP = require('ftp');
      
function main(){
    fork(__dirname + '/node_modules/ftpd/test.js');
    let ftp = new FTP();
    ftp.on('ready', ()=>{
        console.log('connected');
        
        ftp.list( (err,list) =>{
            if(err){
                console.error(err);
                return;
            }
            console.log(list);
        });
        
        // download
        ftp.get('test.js', (err, stream) => {
            if(err){
                console.error(err);
                return;
            }
            
            let out = fs.createWriteStream('test.bak');
            stream.pipe(out);
            
        });
        
        
        ftp.put('test.js', 'test.upload', err=> (err && console.error(err)));
        ftp.cwd('node_modules', err => ( err && console.error(err)));
    });
    ftp.connect({
        // user: 'guest',
        // password: '',
        host:'127.0.0.1', 
        port: 7002
    });
}

main();
