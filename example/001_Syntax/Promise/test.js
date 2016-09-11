
function example_1(){
    function hello(v){
        let tag = 'check-' + v;
        console.time(tag);
        console.log(`${tag} >> before new Promise`);
        return new Promise((resolve, reject)=>{
            console.log(`${tag} >> new Promise`);
            setTimeout(()=>{
                console.timeEnd(tag);    
                if(v != 2){
                    resolve('success');;
                }else{
                    reject('fail');
                }
            }, 1000);
        });
    }

    hello(1)
        .then( (v) => {
            console.log([1, v]);
        })
        .catch( (err) => {
            console.log([1,err]);
        });
        
    hello(2)
        .then( (v) => {
            console.log([2, v]);
            })
        .catch( (err) => {
            console.log([2, err]);
        });
    hello(3)
        .then( ()=> hello(4) )
        .then( ()=> hello(5) )
        .then( ()=> hello(6) )
        .then( ()=> hello(7) )
        .then( ()=> hello(8) )
        .then( ()=> hello(9) )
        .then( ()=> hello(10) )
        
    hello(11);
    hello(12);
    hello(13);
}

function example_2(){
    let wait1000 =  new Promise((resolve, reject)=>{
      setTimeout(resolve, 1000);
    }).then(()=> {
      console.log('wait 1s');
    });
}

let createTimer = (sec) => {
    return new Promise((resolve, reject)=> {
        let tag = `wait${sec}s`;
        console.log(`${tag} start`);
        setTimeout(()=>{
            resolve(tag);
            console.log(`${tag} finish`);
        }, sec * 1000)
    });    
};

/**
 * 並行多個操作並等待全部執行完成
 *
 */
function example_3_wall_all(){
    let wait1s = createTimer(1);
    let wait3s = createTimer(3);  
    let wait5s = createTimer(5);
    
    Promise.all([
        wait1s,
        wait5s,
        wait3s
    ]).then((vs)=>{
       for(let v of vs){
         console.log(v); 
       }
    });
}

/**
 * 並行多個操作, 但是只有第一個返回值會丟向下一個步驟
 * 注意: 其他未完成操作仍會繼續執行完成不會被中斷
 */
function example_4_race(){
    //Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
    Promise.race([
        createTimer(5),
        createTimer(1),
        createTimer(3)
    ]).then(function(v){
       console.log(v); // a
    });
}

/**
 * Promise.then 返回值測試
 *
 */
function example_5_waitN(){
    let wait1000 = (v)=> new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('timeout here');
            resolve(v);
        }, 1000)
    });
    
    wait1000(100)
        .then(function(v) { // 100
            console.log(`#1 ${v}`);
            return wait1000(v+1); // promise
        })
        .then(function(v) { // 101
            console.log(`#2 ${v}`);
            return 'hi'; // value
        })
        .then(function(v) { // hi
            console.log(`#3 ${v}`);
        });
}

/**
 * Promise 將非同步循序串接執行
 *
 */
function example_6_sequential(){
    let step_1 = (v) => {
        
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('step_1-start' + v);
                resolve(v+1);
                console.log('step_1-end');
                }, 100);
        });
    };
    
    let step_2 = (v) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('step_2-start' + v);
                resolve(v+1);
                console.log('step_2-end');
            }, 100);
        });
    }
    
    let step_3 = (v) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('step_3-start' + v);
                resolve(v+1);
                console.log('step_3-end');
            }, 100);
        });
    };
    
    new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('start');
            resolve(1);
            console.log('end');
        }, 100);
    })
    .then( step_1 )
    .then( step_2 )
    .then( step_3 )
    .then( (v) =>{
        console.log('finish ' + v);
    });
    
}

/**
 * 丟出例外測試
 *
 */
function example_7_throw_error(){
    try{
        let promise = new Promise((resolve,reject) => {
            throw new Error('promise error');
        });
        promise
            .then(null)
            .catch((err)=>console.log(['promise.catch', err])); // 這裡處理
    }catch(ex){
        console.log(['try...catch',ex]);
    }
}

function example_8_with_request(){

    let http = require('http'),
        querystring = require('querystring');
    let postData = querystring.stringify({
          'msg' : 'Hello World!'
        });
    let pms = new Promise((resolve, reject)=> {
        let req = http.request({
          hostname: 'www.google.com',
          port: 80,
          path: '/upload',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
          }
        }, (res) => {
          // console.log(`STATUS: ${res.statusCode}`);
          // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
          res.setEncoding('utf8');
          res.on('data', (chunk) => {
            resolve(chunk);
          });
          res.on('end', () => {
            // console.log('No more data in response.');
          });
        });

        req.on('error', (e) => {
          reject(`problem with request: ${e.message}`);
        });

        // write data to request body
        req.write(postData);
        req.end();
    });
    
    pms.then( (body) => {
        console.log(`BODY: ${body}`);
    }).catch( (err) => {
        console.log(err);
    });
    
}

// 重複使用 Promise
function example_9_reuse(){
    let v = 1;
    // 狀態已被解析, 不會重新解析狀態
    let p = new Promise((resolve, reject)=> {
        console.log('1-1'); // 執行一次
        process.nextTick( ()=>{
            console.log('1-2'); // 執行一次
            v += 1;
            resolve([v, v%2]);
        });
    });
    
    p.then( (v)=>{
        console.log(['#1', v]);
    });
    p.then( (v)=>{
        console.log(['#2', v]);
    });
    p.then( (v)=>{
        console.log(['#3', v]);
    });
    
}

// reject 由最近的 catch 處理, 中間的 then 會被略過
function example_10(){
    new Promise((y, n)=>{
        n();
    })
    .then( ()=>console.log('#1') ) // 忽略
    .then( ()=>console.log('#2') ) // 忽略
    .catch( ()=>console.log('here') ) // 處理 reject
    .then( ()=> console.log('#3') ); // 接續執行
    
}

function example_11_timeout(){
    new Promise( (y,n)=>{
        setTimeout(()=>{
            n();
        }, 1000);
        
        // 狀態會被忽略
        setTimeout( ()=>{
            y();
        }, 3000);
    }).then( ()=>console.log('y?'), ()=>console.log('n?'));
}

function example_12_resolve(){
    // 直接把值丟到 then
    Promise.resolve(100)
        .then( 
            v => console.log(`here #1: ${v}`), 
            ()=>console.log('ignore') 
        );
    
    // 不會觸發 reject
    Promise.resolve(new Error('test'))
        .then( 
            v => console.log(`here #2: ${v}`), 
            ()=>console.log('ignore') 
        );
        
    
    // 解析 promise 後決定 then or catch
    Promise.resolve( new Promise((y,n)=>y(200)) )
        .then( 
            v => console.log(`here #3: ${v}`), 
            ()=>console.log('ignore') 
        );
    Promise.resolve( new Promise((y,n)=>n(300)) )
        .then( 
            v => console.log('ignore'), 
            v=> console.log(`here #4: ${v}`) 
        );
        
    // thenable object
    Promise.resolve( {
        then: function(y,n){
            y(400);
        }
    })
        .then( 
            v=> console.log(`here #4: ${v}`) ,
            () => console.log('ignore')
        );
}

function example_13_reject(){
    // 直接把值丟到 catch
    Promise.reject(100)
        .then( 
            ()=>console.log('ignore'), 
            v => console.log(`here #1: ${v}`)
        );
    
    // 忽略 promise, 把 promise 視為值傳給 catch
    Promise.reject( new Promise((y,n)=>y(200)) )
        .then( 
            ()=>console.log('ignore') ,
            v => console.log(`here #2: ${v}`)
        );
        
    Promise.reject( new Promise((y,n)=>n(300)) )
        .then( 
            v => console.log('ignore'), 
            v=> console.log(`here #3: ${v}`) 
        );
}

function example_promisify(){
    const 
        promisify = require("promisify-node"),
        fs_p = promisify(require('fs'));
        
    fs_p.mkdir('a')
        .then( ()=> fs_p.stat('a'))
        .then( console.log)
        .then( () => fs_p.rmdir('a'))
        .catch( console.error)
        
    
}

function promise_with_yield(){

    function* _(){
        console.log('#1');
        let [a,b] = yield( Promise.all([
            new Promise((y,n)=> setTimeout( ()=> y(300), 3000) ),
            new Promise((y,n)=> setTimeout( ()=> y(600), 6000) ),
        ]));
        console.log('#2');
        console.log('=>', a,b, '<=');
    }
    let g = _()
    g.next().value
        .then( v => {
            // console.log(v);
            g.next(v); 
        })
        .catch(console.error);
}

function promise_with_yield2(){
    function create(v){
        return new Promise( (y,n)=>{
            console.log(`${v} start`);
            setTimeout( ()=> {
                y(v);
                console.log(`${v} end`);    
            }, v);
        });
    }
    
    function* _(){
        let v1 = yield( create(3000));
        let v2 = yield(create(1000));
        let v3 = yield(create(5000));
        
        console.log([v1,v2,v3]);
    }
    let g = _();
    
    function go(result){
        if(result.done) return;
        result.value.then(function(r){
            go(g.next(r));
        });
    }
    
    go(g.next());
   
}

function promise_with_yield3(){
    function create(v){
        return new Promise( (y,n)=>{
            console.log(`${v} start`);
            setTimeout( ()=> {
                y(v);
                console.log(`${v} end`);    
            }, v);
        });
    }
    
    function createGen(queue=[]){
        return function* _(){
            while(queue.length > 0){
                let job = queue.shift();
                if(job){
                    yield create(job);
                }
            }
        }
    }
    let _ = createGen([3000, 1000, 5000]);
    let g = _();
    
    function go(result){
        if(result.done) return;
        result.value.then(function(r){
            go(g.next(r));
        });
    }
    
    go(g.next());
   
}

function yield_to_array(){
    function* poem() {
        yield( Promise.resolve( "Roses are red" ) );
        yield( Promise.resolve( "Violets are blue" ) );
        yield( Promise.resolve( "I'm a schizophrenic" ) );
        yield( Promise.resolve( "And so am I" ) );
    }
     
    // By invoking the generator function, we are given a generator object, which we can
    // use to iterate through the yield-delimited portions of the generator function body.
    let iterator = poem();
    // In this version of the code, the generator function is yielding data that is
    // asynchronous in nature (Promises). The generator itself is still synchronous; but, we
    // now have to be more conscious of the type of data that it is yielding. In this demo,
    // since we're dealing with promises, we have to wait until all the promises have
    // resolved before we can output the poem.
    Promise
        .all( [ ...iterator ] ) // Convert iterator to an array or yielded promises.
        .then( lines => {
            for ( let line of lines ) {
                console.log( line );
            }
        });
}

function promise_pool_test(){
    const PromisePool = require('es6-promise-pool');
    let Q=[1,2,3,4,5,6,7,8,9,10];
    let promiseProducer = function*(){
        while(Q.length > 0){
            let v = Q.shift();
            if(v){
                yield new Promise( (y,n)=>{
                    console.log( `${v} Run` );
                    setTimeout( ()=>{
                        y();
                    }, v*1000);
                });
            }
        }
    }
    let pool = new PromisePool(promiseProducer, 5)
    
    let tid = setInterval( ()=>{
        Q.push( Math.random()*5);
        console.log(`${Q.length}`);
    }, 1000);
    
    pool.start()
        .then( ()=> {
            clearInterval(tid);
            console.log('all job finish');
        })
        .catch(console.error);
        
}

function recursive_promise(){
    function _(v, store=[]){
        return new Promise((y,n)=>{
            if(v<10){
                store.push(v);
                y({value:v, done: false});
            }else{
                //n(store); // 跳離點
                y({value:store, done: true});
            }
        }).then( v2=>{
            if(v2.done===true){
                return v2.value;
            }
            return _(v2.value+1, store);
        });
    }
    _(0, [])
        .then(console.log); // 0-9
}

function promise_with_loop(){
    const co = require('co');
    co(function* (){
        for(let i=0;i<10; ++i){
            yield new Promise((y,n)=>{
                console.log(i);

                let t = Math.random()*10000;
                console.log(t);
                setTimeout( ()=> {
                    y();
                }, t);
            });
        }
    }).catch(err => console.log(['co error', err]));
}

function main(){
    // example_1();
    // example_2();
    // example_3_wall_all();
    // example_4_race();
    // example_5_waitN();
    
    // example_6_sequential();
    // example_7_throw_error();
    // example_8_with_request();
    // example_9_reuse();
    // example_10();
    // example_11_timeout();
    // example_12_resolve();
    // example_13_reject();
    // example_promisify();
    // promise_with_yield();
    // promise_with_yield2();
    // promise_with_yield3();
    // yield_to_array();
    // promise_pool_test();
    // recursive_promise();
    promise_with_loop();
    
}
main();
