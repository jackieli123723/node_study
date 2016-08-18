const comongo = require('co-mongodb')
    , co = require('co')
    ,MongoClient = require('mongodb').MongoClient;

class DB{
    static factory(url){
        return new Promise( (y,n)=>{
            MongoClient.connect(url, (err, client) =>{
                if(err){
                    n(err);
                }else{
                    y( new DB(client) );
                }
            });
        });
    }
    
    constructor(client){
        this.client = client;
    }
    
    update(col_name, where, new_doc){
        let col = this.client.collection(col_name);
        return new Promise((y,n)=>{
            col.updateOne(where, new_doc, (err, result)=>{
                if(err){
                    n(err);
                }else{
                    y(result);
                }
            });
        });
    }
    
    insertMany(col_name, doc){
        let col = this.client.collection(col_name);
        return new Promise((y,n)=>{
            col.insertMany([ doc ], (err, result)=>{
                if(err){
                    n(err);
                }else{
                    y(result);
                }
            });
        });
    }
    
    deleteMany(col_name, where){
        let col = this.client.collection(col_name);
        return new Promise((y,n)=>{
            col.deleteMany(where, (err, result)=>{
                if(err){
                    n(err);
                }else{
                    y(result);
                }
            });
        });
    }
    
    findMany(col_name, where){
        let col = this.client.collection(col_name);
        return new Promise((y,n)=>{
            col.find(where, (err, result)=>{
                if(err){
                    n(err);
                }else{
                    y(result);
                }
            });
        });
    }
    findOne(col_name, where){
        let col = this.client.collection(col_name);
        return new Promise((y,n)=>{
            col.findOne(where, (err, result)=>{
                if(err){
                    n(err);
                }else{
                    y(result);
                }
            });
        });
    }
    
    close(){
        this.client.close();
    }
}

function test_with_co(){
    
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

function main(){
    test_with_co();
    test_with_promise();
}
    
main();
