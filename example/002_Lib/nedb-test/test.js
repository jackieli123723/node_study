let Datastore = require('nedb')
  , db = new Datastore({ 
        filename: 'app.db', 
        autoload: true 
    })
   , co = require('co')
   , wrap = require('co-nedb');
    
function test_nedb(){
        
    // insert one
    db.insert({
        a:1,
        b:'s',
        c:new Date(),
        d:4.18,
        e: {a1:'xxxx', b2:'yyyyy'}
    }, function (err, newDoc) {   // Callback is optional
      // newDoc is the newly inserted document, including its _id
      // newDoc has no key called notToBeSaved since its value was undefined
      console.log([err, newDoc]);
    });

    // insert more
    db.insert([{name:1},{name:2}]);
    
    // db.find({ a:1 }, function (err, docs) {
    db.find({ name:{'$gte':1} }, function (err, docs) {
      // docs is an array containing documents Mars, Earth, Jupiter
      // If no document is found, docs is equal to []
      console.log([err, docs]);
    });
}

function test_co_nedb(){
    var users = wrap(db);
    co(function*() {
        yield users.remove({});
     
        yield users.insert({ name: 'Tobi', species: 'ferret' });
        yield users.insert({ name: 'Loki', species: 'ferret' });
        yield users.insert({ name: 'Jane', species: 'ferret' });
         
        var res = yield users.findOne({ name: 'Tobi' });
        // res.name.should.equal('Tobi');
        console.log(res);
         
        var res = yield users.find({ species: 'ferret' });
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });;
}

function main(){
    
    test_nedb();
    test_co_nedb();
}
    
main();
