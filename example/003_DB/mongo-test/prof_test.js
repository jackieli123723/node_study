const
    {MongoClient} = require('mongodb');

function factory(url){
    return new Promise( (y,n)=>{
        MongoClient.connect(url, (err, client) =>{
            if(err){
                n(err);
            }else{
                y( client );
            }
        });
    });
}
let db = factory('mongodb://localhost:27017/test001');
let c = 0;
let f = 0;
let len = 700000;
let batch_len = 100;
db.then( client => {
    
    let col = client.collection('data');
    
    
    let begin = Date.now();
    batch = [];
    for(let i =0;i<len;++i){
        batch.push( {
            name: 'test',
            t: Date.now()
        });
        
        if(batch.length >= batch_len){
            col.insertMany(batch, (err, result)=>{
                c+=batch_len;
                if(err){
                    console.error(err);
                    // f+=10;
                }
                // console.log(c);
                if(c >= len){
                    client.close();
                    let end = Date.now();
                    console.log(`${f}/${c} ${end}-${begin}=${end - begin}ms`);
                }
            });
            batch = [];
        }
    }
    console.log('wait');
});