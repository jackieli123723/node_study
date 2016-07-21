var dgram = require('dgram');
var message = String.fromCharCode( 0, 1, 0x63, 0x61,0x6d, 0x69, 0x6e, 0x66, 0x66, 0x6f, 0, 0x6f, 0x63, 0x74, 0x65, 0x74, 0);
// console.log(message.length);
// var message = new Buffer('');
// message.writeUInt8(0x1b);
// for(var i = 0;i<47;++i){
    // message.writeUInt8(0x0);
// }
var client = dgram.createSocket("udp4");
//client.setBroadcast(true);
client.send(message, 0, message.length, 69, "255.255.255.255", function(err, bytes) {
    console.log(err);
    console.log(bytes);
    //console.log('send');
//  client.close();
});

client.on('message', function(msg, rinfo){
    console.log(msg);
    console.log('x');
});

client.on('error', function(err){
    console.log(err);
});

