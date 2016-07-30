
function example_1(){
    function hello(v){
        let pms = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(v % 2 == 0){
                    resolve('success');;
                }else{
                    reject('fail');
                }
            }, 1000);
        });
        
        
        return pms;
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
function example_3(){
    //Returns a promise that either resolves when all of the promises in the iterable argument have resolved or rejects as soon as one of the promises in the iterable argument rejects. If the returned promise resolves, it is resolved with an array of the values from the resolved promises in the iterable. If the returned promise rejects, it is rejected with the reason from the promise in the iterable that rejected. This method can be useful for aggregating results of multiple promises together.
    
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
function example_4(){
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
function example_5(){
    let wait1000 = (v)=> new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(v);
        }, 1000)
    });
    
    wait1000(100)
        .then(function(v) {
            console.log('Yay!' +v);
            return wait1000(v+1);
        })
        .then(function(v) {
            console.log('Wheeyee!' +v);
            return 'hi';
        })
        .then(function(v) {
            console.log('finish!' +v);
        });
}

/**
 * Promise 將非同步循序串接執行
 *
 */
function example_6(){
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
function example_7(){
    try{
        var promise = new Promise((resolve,reject) => {
            throw new Error('promise error');
        });
        promise
            .then(null)
            .catch((err)=>console.log(['promise.catch', err]));
    }catch(ex){
        console.log(['try...catch',ex]);
    }
}

function example_8(){

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

function main(){
    // example_1();
    // example_2();
    // example_3();
    // example_4();
    // example_5();
    
    // example_6();
    // example_7();
    example_8();
}
main();
