let net = require('net');
let port = 8124;
// let port = '/tmp/app.sock';
let server = net.createServer((socket)=>{
    socket.on('data', (data)=>{
        socket.write(data);
    });
    socket.on('end', ()=>{
        console.log('client close');
    });
    socket.write('hello tcp client');
}).listen(8124, ()=>{
    console.log('server Runing');
}).on('error', ()=>{
});