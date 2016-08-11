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
    let c = 0;
    db.createReadStream({keys:true, values:false})
        .on('data', function (key) {
            ++c;
        db.del(key, function(){});
      })
      .on('error', function (err) {
        console.log('Oh my!', err)
      })
      .on('end', function () {
        console.log('clear ' + c)
      })
}, 5000);
