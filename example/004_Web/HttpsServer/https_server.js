let https = require("https")
    fs =require('fs');

let server = https.createServer({
    key: fs.readFileSync('../../006_Net/TLSServer/keys/server.key'),
    cert: fs.readFileSync('../../006_Net/TLSServer/keys/server.crt') 
},(req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html' });
    
    // handle request
    let buf = [];
    req
        .on('data', (trunk)=>{
            buf.push(trunk);
        })
        .on('end', ()=>{
            let all_buff = Buffer.concat(buf);
            console.log('end');
            resp.write(`client data: ->${all_buff.toString()}<-`);
            
            resp.write('hello world, Arick');
            resp.end()
        });
    
	
});
server
    .on('clientError', (ex, socket)=>{
        console.log('Event: clientError');
    })
    .on('upgrade', (req, socket, head)=>{
        console.log('Event: upgrade');
    })
    .on('connect', (req, socket, head)=>{
        console.log('Event: connect');
    })
    .on('checkContinue', (req, resp)=>{
        console.log('Event: checkContinue');
    })
    .on('close', ()=>{
        console.log('Event: close');
    })
    .on('request', (req, resp)=>{
        console.log('Event: request');
    })
    .on('connection', (socket)=>{
        console.log('Event: connection');
    })
    .listen(8099);
let address = server.address();
// console.log(address);
console.log(`Server running at http://localhost:${address.port}/`);