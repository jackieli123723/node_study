const nano = require('nano')('http://192.168.99.100:5984');
nano.db.create('books');
let books = nano.db.use('books');

//Insert a book document in the books database
books.insert({name: 'The Art of war'}, null, function(err, body) {
  if (!err){
    console.log(body);
    //Get a list of all books
    books.list(function(err, body){
      console.log(body.rows);
    });
  }else{
    console.log(err);
  }
});

