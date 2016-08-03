let tls = require('tls'),
    fs = require('fs');
let port = 18124;
// let port = '/tmp/app.sock';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let client = tls.connect(port, {
    key : fs.readFileSync('./keys/client.key'),
    cert : fs.readFileSync('./keys/client.crt'),
    ca : [fs.readFileSync('./keys/ca.crt')],
}, ()=>{
    console.log( client.authorized );
    process.stdin.pipe(client);
});
client.setEncoding('utf-8');

client.on('data', (data)=>{
    console.log(data);
});

client.on('end', ()=>{
    console.log('socket close');
});