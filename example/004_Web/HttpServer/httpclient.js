let http = require('http');

let client = http.request({
    hostname: 'localhost',
    port: 8099,
    path: '/',
    method: 'GET'
}, (res /* ClientResponse */) => {
    console.log(`status: ${res.statusCode}`);
    console.log(`header: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf-8');
    res.on('data', (chunk)=>{
        console.log(chunk);
    });
});
client.end();