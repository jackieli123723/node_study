let WebSocketServer  = require('ws').Server,
    wss = new WebSocketServer({ port: 12010 });
    
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send(message);
    });
 
    ws.send('hello WebSocket');
});

// let http = require('http'),
    // crypto = require('crypto');
    
// let server = http.createServer((res, resp)=>{
    // res.writeHead(200, {
        // 'Content-Type':'text/plain'
    // });
    // res.end('hello WebSocket');
// });
// server.listen(12010);

// server.on('upgrade', (req, socket, upgradeHead)=>{
    // let head = new Buffer(upgradeHead.length);
    // upgradeHead.copy(head);
    
    // let key = req.headers['sec-websocket-key'];
    // let shasum = crypto.createHash('sha1');
    // key = shasum.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
    // let headers = [
        // 'HTTP/1.1 101 Switching Protocols',
        // 'Upgrade: websocket',
        // 'Connection: Upgrade',
        // 'Sec-WebSocket-Accept: ' + key,
        // 'Sec-WebSocket-Protocol: ' + protocol
    // ];
    // socket.setNoDelay(true);
    // socket.write(headers.concat('','').join('\r\n'));
    
    // let ws = new WebSocket();
    // ws.setSocket(socket);
// });