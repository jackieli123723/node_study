const
    zmq = require('zmq');
    
function mode_request_reply(){
    let addr = 'tcp://127.0.0.1:12345';
    function createServer(){
        let socket = zmq.socket('rep');
        socket.connect(addr, err=>{
            console.error(err);
        });
        socket.on('message', msg=>{
            console.log(msg.toString());
            socket.send('hello request');
        });
    }

    function createClient(){
        let socket = zmq.socket('rep');
        socket.bind(addr, err=>{
            if(err){
                return console.error(err);
            }
            console.log('bind success');
            socket.on('message', msg=>{
                console.log(msg.toString());
            });
            setInterval( ()=>{
                socket.send('hello reply');
            }, 1000);
        });
    }
    createClient();
    createServer();
}

function mode_producer_consumer(){
    let addr = 'tcp://127.0.0.1:3000';
    function createConsumer(){
        let socket = zmq.socket('pull');
        socket.connect(addr, err=>{
            console.error(err);
        });
        socket.on('message', msg=>{
            console.log(msg.toString());
        });
    }

    function createProducer(){
        let socket = zmq.socket('push');
        socket.bind(addr, err=>{
            if(err){
                return console.error(err);
            }
            console.log('bind success');

            setInterval( ()=>{
                socket.send('hello Consumer');
            }, 1000);
        });
    }
    createProducer();
    createConsumer();
}

function mode_publish_subscribe(){
    let addr = 'tcp://127.0.0.1:4000';
    let topic = 'ALERT';
    function createConsumer(){
        let socket = zmq.socket('sub');
        socket.connect(addr, err=>{
            console.error(err);
        });
        socket.subscribe(topic);
        socket.on('message', msg=>{
            console.log(msg.toString());
        });
    }

    function createPublish(){
        let socket = zmq.socket('pub');
        socket.bind(addr, err=>{
            if(err){
                return console.error(err);
            }
            console.log('bind success');

            setInterval( ()=>{
                socket.send(`${topic} Consumer`);
                socket.send(`YYY xxxx`);
            }, 1000);
        });
    }
    createPublish();
    createConsumer();
}

function main(){
    // mode_request_reply();
    // mode_producer_consumer();
    mode_publish_subscribe();
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
