const 
    // fork = require('child_process').fork,
    {promisify, co} = require('..\\..\\001_Syntax\\Promise\\index'),
    fs = require('fs'),
    FTP = require('ftp');
      
function main(){
    const {createFtpd, ftpRun} = require('./index');
    let server = createFtpd({
    })
    server.debugging = 4;
    server.on('error', function (error) {
        console.log('FTP Server error:', error);
    });

    ftpRun({
        host: '127.0.0.1',
        port: 1021,
        user: 'arick',
        password: '1234'
    })
    .then(ftp => {
        ftp.list( (err,list) =>{
            if(err){
                console.error(err);
                return;
            }
            console.log(list);
        });
        // download
        ftp.download('test.js', 'test.bak')
            .then( ()=> console.log('download finish'))
            .catch(console.error)
            .then( () => ftp.upload('test.js', 'test.upload') )
            .then( ()=> console.log('upload finish'))
            .catch(console.error)
            .then( ()=> ftp.chdir('node_modules') )
            .then( ()=> console.log('chdir finish'))
            .catch(console.error)
            .then( ()=> ftp.dir() )
            .then( console.log )
            .catch( console.error);
            
            
    })
    .catch(console.error);
}

main();
