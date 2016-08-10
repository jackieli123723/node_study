const comongo = require('co-mongodb')
    , co = require('co');


function main(){
    
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
    
main();
