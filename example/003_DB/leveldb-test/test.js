const levelup = require('levelup'),
      co = require('co'),
      wrap = require('co-level'),
      db = wrap(levelup('./mydb'));
    
function get(){
    co(function*(){
        console.log(yield db.get('name'));
    }).catch((err)=>{
        console.log(err);
    });
}

function add_data(){
    co(function*(){
        for(var i =0;i<1000; ++i){
            console.log(i);
            yield db.put('key.'+i, JSON.stringify({'a':Math.random()*500000, 'b':'string', 'c':{}, 'd':[], 'e':3.14, 'f': true}));
            // console.log(yield db.get('yyyy'));
        }
    }).catch((err)=>{
        console.log(err);
    });
}

function random_read_test(){
    setInterval(function(){
        co(function*(){
            let key = 'key' + parseInt(Math.random()*500000);
            console.log('search ' + key);
            console.time(key);
            let res = yield db.get(key);
            console.timeEnd(key);
            console.log(res);
        }).catch(function(err){
            console.log(err);
        });
        console.log('idle wait');
    }, 1000);
}

function random_write_test(){
    setInterval(function(){
        co(function*(){
            let key = 'key' + parseInt(Math.random()*500000);
            console.log('search ' + key);
            console.time(key);
            let res = yield db.get(key);
            // res.a = parseInt(Math.random()*500000);
            // db.put(key, res);
            console.timeEnd(key);
            console.log(JSON.stringify(res));
        }).catch(function(err){
            console.log(err);
        });
        console.log('idle wait');
    }, 1000);
}

function count_length(){
    let c = 0;
    console.time('test#1');
    let rs = db.createReadStream({ keys: true, values: false })
      .on('data', function (data) {
        ++c;
      })
      .on('error', function (err) {
        console.log('Oh my!', err)
      })
      .on('end', function () {
        console.log(`Data Total: ${c}`);
        console.timeEnd('test#1');
      })
}

function find_key(){
    console.time('test#2');
    let rs = db.createReadStream({ keys: true, values: false })
      .on('data', function (key) {
        if(key == 'key10198'){
            console.timeEnd('test#2');
            rs.found = true;
            rs.destroy();
        }
      })
      .on('error', function (err) {
        console.log('Oh my!', err)
      })
      .on('end', function () {
        console.log('key not found')
      })
}

function filter_range(){
    let rs = db.createReadStream({ 
            keys: true, 
            values: false,
            start: 'key100000',
            end: 'key100010'
        })
      .on('data', function (key) {
        console.log(key);
      })
      .on('error', function (err) {
        console.log('Oh my!', err)
      })
      .on('end', function () {
        console.log('stream end')
      });
}

function encode_json(){
    let json_db = wrap(levelup('./json_db', {valueEncoding: 'json'}));
    co(function*(){
        yield json_db.put('nb.aspire.e15', {cpu: 'i5', ram: '8g', hdd: '1tb'});
        let v = yield json_db.get('nb.aspire.e15');
        console.log(v);
        yield json_db.clear();
    });
}
function main(){
    // random_read_test();
    // random_write_test();
    // count_length();
    // find_key()
    // filter_range();
    // add_data();
    encode_json();
    
}
    
main();
