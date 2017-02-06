const net = require('net');

function ipReNew(cfg = {}){
    cfg = Object.assign({
        host: '127.0.0.1',
        port: 9051
    }, cfg);
    return new Promise( (y,n)=>{
        let success = false;
        let client = net.connect(cfg, ()=>{
            client.write('AUTHENTICATE\r\nSIGNAL NEWNYM\r\n');
        });
        client.on('data', (data)=>{
            let s = data.toString();
            if(s == '250 OK\r\n250 OK\r\n'){
                success = true;
            }else{
                success = s;
            }
            // console.log([s]);
            client.end();
        });
        client.on('error', (err)=>{
            n(err);
        });

        client.on('end', ()=>{
            if(success === true){
                y(success);
            }else{
                n(success);
            }
        });
    });
}

module.exports = {
    ipReNew
};