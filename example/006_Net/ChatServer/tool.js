/*

*/
let net = require('net'),
    client = [];

Array.remove = function(arr, el) {
    for(var i=arr.length-1;i>=0;--i){
        if(arr[i] == el){
            arr.splice(i, 1);
        }
    }
    return true;
};

net.createServer(function(socket) { 
    client.push(socket);
    socket.on('end', function(){
        console.log('end event');
    });    
    socket.on('timeout', function(){
        console.log('timeout event');
    });
    socket.on('error', function(){
        console.log('error event');
    });      
    socket.on('close', function(){
        console.log('close event');
        Array.remove(client, socket);
    });
    socket.on('data', function(buffer) { 
        console.log('recv: ' + buffer);
        for(var i=0,c=client.length;i<c;++i){
            if(client[i] == socket){
                continue;
            }
            
            try{
                client[i].write(buffer);
            }catch(ex){
                console.log(eX);
            }
        }
    });
    console.log('Total Client: ' + client.length);
}).listen(7);


console.log('echo starting');