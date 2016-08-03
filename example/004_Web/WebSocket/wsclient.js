let WebSocket = require('ws'),
    ws = new WebSocket('ws://127.0.0.1:12010/');
 
ws.on('open', function open() {
  ws.send('hello WebSocket Server');
});
 
ws.on('message', function(data, flags) {
    console.log(`Receive: ${data}`);
    setTimeout(()=>{
        let n = new Number(new Date());
        ws.send( `Tick: ${n}` );
    }, 500);
    
});