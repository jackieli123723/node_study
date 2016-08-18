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
}
module.exports.DB = DB;

if (require.main === module) {
    main();
}