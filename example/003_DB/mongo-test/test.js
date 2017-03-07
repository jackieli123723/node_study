
function test_with_co(){
    const co = require('co');
    const comongo = require('co-mongodb');
    co(function *() {
      // 連線
      let db = yield comongo.client.connect('mongodb://localhost:27017/test');
      
      // 取得 collection
      let col = yield comongo.db.collection(db, 'testCollection');
      
      // 新增
      yield col.insert({'name': 'arick'});
      yield col.update({'name': 'arick'}, {'$set':{
          level: 99
      }});
      // 搜尋
      let res = yield col.findOne({'name': 'arick'});
      console.log(res);
      
      // 刪除
      yield col.remove({'name': 'arick'});
      
      yield comongo.db.close(db);
    });
}

function test_with_promise(){
    const DB = require('./index').DB;
    
    DB.factory('mongodb://localhost:27017/test')
        .then( (client) => {
            return client.insertMany('game', {'name': 'arick'})
                .then( v=> {
                    console.log(`insert : ${JSON.stringify(v)}`);
                    return client.update('game', {'name': 'arick'}, {'$set':{
                        level: 99
                    }});
                })
                .then( (v) => {
                    console.log(`update : ${v}`);
                    return client.findOne('game', {'name': 'arick'});
                })
                .then( (v) => {
                    console.log(`find : ${JSON.stringify(v)}`);
                    return client.deleteMany('game', {'name': 'arick'});
                })
                .then( (v) => {
                    console.log(`delete : ${v}`);
                    return client.close(); 
                })
                .catch( err => console.error(err) );
        });
}

function putBinary(){
    const mgo = require('mongodb');
    let bindata = mgo.Binary('binary data');
    mgo.MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
        db.collection('bdata').insertOne( {
            data: bindata
        }, (err, r)=>{
        
            db.close();
        });
        
    });
    
}

function main(){
    // test_with_co();
    // test_with_promise();
    
    
    // const DB = require('./index').DB;
    
    // DB.factory('mongodb://localhost:27017/test')
        // .then( (client) => {
           // client.insertMany('bdata', {
                // "data" : bindata
            // }); 
        // });
}

if (require.main === module) {
    main();
}
