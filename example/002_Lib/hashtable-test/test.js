const HashTable = require('hashtable');

function main(){
    let db = new HashTable();
    db.put('p1', 'ssss');
    db.put('p2', 123);
    db.put('p3', true);
    db.put('p4', [1,2,3,4]);
    db.put('p5', {'name':'arick', 'level': 99});
    
    console.log(db.get('p5'));
}
    
main();