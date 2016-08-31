var co = require('co');

var fs = require('fs');
var thunkify = require('thunkify');

function test_co(){
    co(function *(){
      // yield any promise
      var result = yield Promise.resolve(true);
    }).catch(onerror);

    co(function *(){
      // resolve multiple promises in parallel
      var a = Promise.resolve(1);
      var b = Promise.resolve(2);
      var c = Promise.resolve(3);
      var res = yield [a, b, c];
      console.log(res);
      // => [1, 2, 3]
    }).catch(onerror);

    // errors can be try/catched
    co(function *(){
      try {
        yield Promise.reject(new Error('boom'));
      } catch (err) {
        console.error(err.message); // "boom"
     }
    }).catch(onerror);


function onerror(err) {
      // log any uncaught errors
      // co will not throw any errors you do not handle!!!
      // HANDLE ALL YOUR ERRORS!!!
      console.error(err.stack);
    }
}
    
function test_wrap_async_func(){
    function read(file) {
      return function(fn){
        fs.readFile(file, 'utf8', fn);
      }
    }

    co(function *(){
      var a = yield read('test.js');
      console.log(a.length);

      var b = yield read('package.json');
      console.log(b.length);
    });
}

function test_thunkify(){
    var read = thunkify(fs.readFile);
    co(function *(){
        var a = yield read('test.js');
        console.log(a.length);
    });
}

function co_with_array(){
    co(function* () {
      var res = yield [
        Promise.resolve(1),
        Promise.resolve(20)
      ];
      console.log(res); 
    }).catch((err)=>{
        console.log(err);
    });
}

function co_with_object(){
    co(function* () {
      let res = yield {
            'a1': Promise.resolve(1),
            'a2': Promise.resolve(20)
      };
      console.log(res); 
    }).catch((err)=>{
        console.log(err);
    });
}

function main(){
    test_co();
    // test_wrap_async_func();
    // test_thunkify();
    // co_with_array();
    // co_with_object();
    // var fn = co.wrap(function* (val) {
      // return yield Promise.resolve(val);
    // });

    // fn(true).then(function (val) {
        // console.log(val);
    // });
    

}
    
main();
