/**
 * http://lokijs.org/#/
 * https://github.com/techfort/LokiJS
 * https://github.com/techfort/LokiJS/wiki
 * https://rawgit.com/techfort/LokiJS/master/jsdoc/index.html
 */
let loki = require('lokijs');
var db = new loki('loki.json');
db.loadDatabase({}, function() {
  // console.log(db.getCollection('movies').data);
  
    let children = db.getCollection('children');
      //Create a collection:
    if(children == null){
        children = db.addCollection('children');
    }
    
    //Insert a document:
    children.insert({name:'Sleipnir', legs: 8});
    children.insert({name:'Sleipnir', legs: 18});
    children.insert({name:'Jormungandr', legs: 0});
    children.insert({name:'Hel', legs: 2});
    // Àx¦s¦^ºÏºÐ
    db.saveDatabase();

    //Retrieve documents:
    console.log(children.get(1)); // returns Sleipnir
    console.log(children.find( {'name':'Sleipnir'} ));
    console.log(children.find( { 
        legs: { 
            '$gt' : 2 
        } 
    } )) ;

});

