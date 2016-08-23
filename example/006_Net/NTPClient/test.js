const net = require('net');
      NTPServer = require('./ntp_server').NTPServer;
function netclient_tcp(){
    let client = new net.Socket();
    client.connect(13, 'time.nist.gov', function() {
        console.log('Connected');
    });
    client.on('data', function(data) {
        console.log('Received: ' + data);
        client.destroy(); // kill client after server's response
    });

    client.on('close', function() {
        console.log('Connection closed');
    });
}

function main(){
    let server = new NTPServer();
    netclient_tcp();
    
    const ntpclient = require('ntp-client');
    ntpclient.getNetworkTime('127.0.0.1', 123, (err, date)=>{
        if(err){
            console.error(err);
        }else{
            console.log(date);
        }
    });
}

main();