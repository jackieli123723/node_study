const redis = require('redis');

class DB{
    constructor( port = 6379, host = '127.0.0.1'){
        this.client = redis.createClient(port, host);
    }
    
    setKV(key, value){
        return new Promise((y,n)=>{
            this.client.set(key, value, (err)=>{
                if(err){
                    n(err);
                }else{
                    y();
                }
            });
        });
    }
    
    getByK(k){
        return new Promise((y,n)=>{
            this.client.get(k, (err, v)=>{
                if(err){
                    n(err);
                }else{
                    y(v);
                }
                
            });
        });
    }
    
    close(){
        this.client.quit();
    }
}

function pubsub(){
    
    let master = redis.createClient();
    let worker1 = redis.createClient();
    worker1.on('subscribe', (channel, count)=>{
        console.log(`Worker#1 .subscribe >> Recv ${channel}, ${count}`);
    });
    worker1.on('message', (channel, message)=>{
        console.log(`Worker#1 .message>> Recv ${channel}, ${message}`)
    });
    worker1.subscribe('chat');
    worker1.subscribe('chat');
    
    let worker2 = redis.createClient();
    worker2.on('subscribe', (channel, count)=>{
        console.log(`Worker#2 .subscribe >> Recv ${channel}, ${count}`);
    });
    worker2.on('message', (channel, message)=>{
        console.log(`Worker#2 .message>> Recv ${channel}, ${message}`)
    }); 
    worker2.subscribe('chat');
    worker2.subscribe('game');
    setInterval( ()=>{
        master.publish('chat', Number(new Date()));
        master.publish('game', Math.random());
    }, 1000);
}

function main(){
    let db = new DB();
    db.setKV('name', 'arick')
        .then( () => {
            return db.getByK('name');
        })
        .then( (v) => {
            console.log(v);
            return db.close();
        })
        .catch( err => console.error(err) );
        
    
    pubsub();
}
module.exports.DB = DB;

if (require.main === module) {
    main();
}