const multilevel = require('multilevel'),
      net = require('net'),
      level = require('level');

function r(){
    return parseInt(Math.random()*500000);
}

let db = multilevel.client();
let con = net.connect(3000);
con.pipe(db.createRpcStream()).pipe(con);

setInterval(()=>{
    let key ='key.' + r();
    db.put(key, r(), function () { 
        console.log('add ' + key);
    });
    
}, 1000);
