const comongo = require('co-mongodb')
    , co = require('co');


function main(){
    
    co(function *() {
      // �s�u
      let db = yield comongo.client.connect('mongodb://localhost:27017/test');
      
      // ���o collection
      let col = yield comongo.db.collection(db, 'testCollection');
      
      // �s�W
      yield col.insert({'name': 'arick'});
      yield col.update({'name': 'arick'}, {'$set':{
          level: 99
      }});
      // �j�M
      let res = yield col.findOne({'name': 'arick'});
      console.log(res);
      
      // �R��
      yield col.remove({'name': 'arick'});
      
      yield comongo.db.close(db);
    });
}
    
main();
