let comongo = require('co-mongodb')
    , co = require('co');


function main(){
    
    co(function *() {
      let db = yield comongo.client.connect('mongodb://localhost:27017/test');
      
      let col = yield comongo.db.collection(db, 'testCollection');
      
      yield col.insert({'name': 'arick'});
      
      let res = yield col.findOne({'name': 'arick'});
      console.log(res);
      
      yield col.remove({'name': 'arick'});
      
      yield comongo.db.close(db);
    });
}
    
main();
