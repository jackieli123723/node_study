let levelup = require('levelup'),
    co = require('co'),
    // thunkify = require('thunkify'),
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
        for(var i =0;i<500000; ++i){
            console.log(i);
            yield db.put('key'+i, {'a':1, 'b':'string', 'c':{}, 'd':[], 'e':3.14, 'f': true});
            // console.log(yield db.get('yyyy'));
        }
    }).catch((err)=>{
        console.log(err);
    });
}

function main(){
    setInterval(function(){
        co(function*(){
            var key = 'key' + parseInt(Math.random()*500000);
            console.log('search ' + key);
            var begin = (new Date()).getTime();
            var res = yield db.get(key);
            var end = (new Date()).getTime()-begin;
            console.log(res);
            console.log('spend: ' + end);
        }).catch(function(err){
            console.log(err);
        });
        console.log('idle wait');
    }, 1000);

}
    
main();
