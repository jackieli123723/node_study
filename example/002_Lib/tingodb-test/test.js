/**
 * http://lokijs.org/#/
 * https://github.com/techfort/LokiJS
 * https://github.com/techfort/LokiJS/wiki
 * https://rawgit.com/techfort/LokiJS/master/jsdoc/index.html
 */
let Db = require('tingodb')().Db,
    co = require('co'),
    thunkify = require('thunkify')
    path = require('path');
    db = new Db(path.join(__dirname, 'db'), {} ),
    col_app = db.collection("app");
let findOne = function( v ){
    return function(callback){
        col_app.findOne( v, callback);
    };
};
setInterval(function(){
    console.log('idle wait');
    col_app.findOne({hello:298}, function(err, item) {
        console.log(item);
    });
}, 1000);

// co(function*(){
   // let r = yield findOne( {hello:2998} );
   // console.log(r);
   
// });    
/*    
for(var i = 0; i<300000; ++i){    
    col_app.insert([{hello:i}
      , {hello:'world_safe2'}], {w:1}, function(err, result) {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        
      // Fetch the document
      // collection.findOne({hello:'world_safe2'}, function(err, item) {
        // assert.equal(null, err);
        // assert.equal('world_safe2', item.hello);
      // })
  });
}*/
// }).catch((err) => {
    // console.log(err);
// });

