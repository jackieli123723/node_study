let tls = require('tls'),
    fs = require('fs');
let port = 18124;
// let port = '/tmp/app.sock';
let server = tls.createServer({
    key : fs.readFileSync('./keys/server.key'),
    cert : fs.readFileSync('./keys/server.crt'),
    ca : [fs.readFileSync('./keys/ca.crt')],
    requestCert: true
},(socket)=>{
    socket.on('data', (data)=>{
        socket.write(data);
    });
    socket.on('end', ()=>{
        console.log('client close');
    });
    console.log( socket.authorized );
    socket.write('hello tcp client');
    socket.setEncoding('utf-8');
    socket.pipe(socket);
}).listen(port, ()=>{
    console.log('server Runing');
}).on('error', ()=>{
});
