let dgram = require('dgram');
let msg = new Buffer('hello udp');
let client = dgram.createSocket('udp4');
client.send(msg, 0, msg.length, 41234, 'localhost', (err, bytes)=>{
    client.close();
});
