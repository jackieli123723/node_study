let dgram = require('dgram'),
    server = dgram.createSocket('udp4');
    
server
    .on('message', (msg, rinfo)=>{
        console.log(`${rinfo.address}:${rinfo.port} >> ${msg}`);
    })
    .on('listening', ()=>{
        let address = server.address();
        console.log(`Server Listening ${address.address}:${address.port}`);
    })
    .bind(41234);
