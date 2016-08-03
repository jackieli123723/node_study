let https = require('https'),
    fs = require('fs');

let client = https.request({
    hostname: 'localhost',
    port: 8099,
    path: '/',
    method: 'GET',
    rejectUnauthorized:false,
    key: fs.readFileSync('../../006_Net/TLSServer/keys/server.key'),
    cert: fs.readFileSync('../../006_Net/TLSServer/keys/server.crt'),
    ca: fs.readFileSync('../../006_Net/TLSServer/keys/ca.crt') 
}, (res /* ClientResponse */) => {
    console.log(`status: ${res.statusCode}`);
    console.log(`header: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf-8');
    res.on('data', (chunk)=>{
        console.log(chunk);
    });
});
client.end();