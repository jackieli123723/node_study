let mysql = require('mysql-co'),
    co = require('co');

function test_mysql(){
    co(function *() {
      var db = mysql.createConnection({host:'127.0.0.1' , user: 'root', database: 'test', password: ''});
      console.log( yield db.query("select 1+1 as qqq") );
      console.log( yield db.query("select 1+2 as qqq") );
      console.log( yield db.query("select 1+3 as qqq") );
      
      console.log(yield db.query('select * from test where name =?', ['arick']) );
      db.end();
    }).catch((err) => {
        console.log(err);
    });
}


function main(){
    test_mysql();
}

main();
