let Datastore = require('nedb')
  , db = new Datastore({ 
        filename: 'app.db', 
        autoload: true 
    });
    /*
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
*/
// db.find({ a:1 }, function (err, docs) {
db.find({ name:{'$gte':1} }, function (err, docs) {
  // docs is an array containing documents Mars, Earth, Jupiter
  // If no document is found, docs is equal to []
  console.log([err, docs]);
});