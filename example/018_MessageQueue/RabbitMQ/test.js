const
    amqp = require('amqp');
let 
    rabbitmq_cfg = {
        host: '192.168.99.100',
        port: 5672,
        login: 'user',
        password: 'password'
    };
function mode_publish_subscribe(){

    let queue_name = 'my-queue';
    let sub = amqp.createConnection(cfg);
    sub.on('error', err => {
        console.log("Subscribe Error: ", err);
    });
    sub.on('ready', ()=>{
        console.log('sub ready');
        sub.queue(queue_name, q=>{
            // 不過濾訊息
            q.bind('#');
            
            q.subscribe( msg=>{
                console.log(msg);
            });
        });
    });
    
    let pub = amqp.createConnection(cfg);
    pub.on('error', err => {
        console.log("Publish Error: ", err);
    });
    pub.on('ready', ()=>{
        console.log('pub ready');
        setInterval( ()=>{
            pub.publish(queue_name, new Date());
        }, 1000);
    });
    
}

function mode_producer_consumer(){
    let queue_name = 'queue2';
    // 避免佇列會自動刪除
    let queue_cfg = {
        autoDelete: false, 
        durable: true
    };
    let sub = amqp.createConnection(rabbitmq_cfg);
    sub.on('error', err => {
        console.log("consumer Error: ", err);
    });
    sub.on('ready', ()=>{
        console.log('consumer ready');
        sub.queue(queue_name, queue_cfg,q=>{
            // 不過濾訊息
            q.bind('#');
            
            q.subscribe( {
                ack: true,
                prefectchCount : 1
            }, msg=>{
                console.log(msg);
                
                q.shift();
            });
        });
    });
    
    let pub = amqp.createConnection(rabbitmq_cfg);
    pub.on('error', err => {
        console.log("producer Error: ", err);
    });
    pub.on('ready', ()=>{
        console.log('producer ready');
        pub.queue(queue_name, queue_cfg,q=>{
            
            setInterval( ()=>{
                pub.publish(queue_name, new Date(), {
                    deliveryMode: 2
                });
            }, 1000);
        });
    });
    
}

function mode_broadcast(){
    let exchange_name = 'queue3';
    // 避免佇列會自動刪除
    let exchange_cfg = {
        autoDelete: false, 
        type: 'fanout'
    };
    let sub = amqp.createConnection(rabbitmq_cfg);
    sub.on('error', err => {
        console.log("Subscribe Error: ", err);
    });
    sub.on('ready', ()=>{
        console.log('Subscribe ready');
        sub.exchange(exchange_name, exchange_cfg,exchange=>{
            // 建立新的 Queue, 並限制同時只能有一個消費者訂閱
            sub.queue('tmp-'+Math.random(),  {
                exclusive: true
            }, q=>{
            
                // 綁 exchange
                q.bind(exchange, '#');
            
                q.subscribe( msg=>{
                    console.log(msg);
                });
            });
        });
    });
    
    let broadcast = amqp.createConnection(rabbitmq_cfg);
    broadcast.on('error', err => {
        console.log("broadcast Error: ", err);
    });
    broadcast.on('ready', ()=>{
        console.log('broadcast ready');
        broadcast.exchange(exchange_name, exchange_cfg, exchange=>{
            
            setInterval( ()=>{
                // 訊息丟到 exchange 中的所有 queue
                exchange.publish('', new Date());
            }, 1000);
        });
    });
    
}

function main(){
    // mode_publish_subscribe();
    // mode_producer_consumer();
    mode_broadcast();
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
