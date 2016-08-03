let net = require('net');
let port = 8124;
// let port = '/tmp/app.sock';
let client = net.connect({port:port}, ()=>{
    console.log('socket connected');
    client.write('hi server');
});
client.on('data', (data)=>{
    let s = data.toString();
    console.log(s);
    if(s == 'hi server'){
        client.end();
    }
});

client.on('end', ()=>{
    console.log('socket close');
});