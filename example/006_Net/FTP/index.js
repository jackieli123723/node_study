const
    fs =require('fs');
    
function ftpUp(ftp){
    ftp.dir = function(){
        return new Promise( (y,n)=>{
            ftp.list( (err,list) =>{
                if(err){
                    n(err);
                    return;
                }
                y(list);
            });
        });
    };
    ftp.chdir = function(folder){
        return new Promise( (y,n)=>{
            ftp.cwd(folder, err => {
                if(err){
                    n(err);
                    return;
                }
                
                y(folder);
            });
        });
    };
    ftp.download = function(remote, local){
        return new Promise((y,n)=>{
            ftp.get(remote, (err, stream) => {
                if(err){
                    n(err);
                    return;
                }
                
                
                stream.pipe(fs.createWriteStream(local))
                    .on('error', n)
                    .on('close', y);
                
            });
        });
    };
    ftp.upload = function(local, remote){
        return new Promise( (y,n)=>{
            console.log('upload===');
            ftp.put(local, remote, err=> {
                if(err){
                    n(err);
                    return;
                }
                
                y({source: local, target: remote});
            });
        });
    };
    
    return ftp;
}

module.exports.ftpRun = function(cfg){
    const FTP = require('ftp');
    cfg = Object.assign({
        port: 21
    }, cfg);
    
    return new Promise( (y,n)=>{
        let ftp = new FTP();
        let ftp2 = ftpUp(ftp);
        ftp.on('error', (err)=>{
            n(err);
        });
        ftp.on('ready', ()=>{
            y(ftp2);
        });
        console.log(cfg);
        ftp.connect(cfg);
        
    });
};
module.exports.createFtpd = function(cfg={}){
    const ftpd = require('ftpd');
    cfg = Object.assign({}, {
        host: '127.0.0.1',
        port: 1021,
        tls: false,
        username: 'arick',
        password: '1234'
    }, cfg);
    let server = new ftpd.FtpServer(cfg.host, {
      getInitialCwd: function () {
        return '/';
      },
      getRoot: function () {
        return process.cwd();
      },
      pasvPortRangeStart: 1025,
      pasvPortRangeEnd: 1050,
      tlsOptions: cfg.tls,
      allowUnauthorizedTls: true,
      useWriteFile: false,
      useReadFile: false,
      uploadMaxSlurpSize: 7000 // N/A unless 'useWriteFile' is true.
    });
    server.on('client:connected', function (connection) {
      // var username = null;
      console.log('client connected: ' + connection.remoteAddress);
      connection.on('command:user', function (user, success, failure) {
        if (user == cfg.username) {
          // username = user;
          success();
        } else {
          failure();
        }
      });

      connection.on('command:pass', function (pass, success, failure) {
        if (pass == cfg.password) {
          success(cfg.username);
        } else {
          failure();
        }
      });
    });
    server.listen(cfg.port);
    return server;
};