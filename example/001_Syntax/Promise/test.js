
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
 * �æ�h�Ӿާ@�õ��ݥ������槹��
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
 * �æ�h�Ӿާ@, ���O�u���Ĥ@�Ӫ�^�ȷ|��V�U�@�ӨB�J
 * �`�N: ��L�������ާ@���|�~����槹�����|�Q���_
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
 * Promise.then ��^�ȴ���
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
 * Promise �N�D�P�B�`�Ǧ걵����
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
 * ��X�ҥ~����
 *
 */
function example_7_throw_error(){
    try{
        let promise = new Promise((resolve,reject) => {
            throw new Error('promise error');
        });
        promise
            .then(null)
            .catch((err)=>console.log(['promise.catch', err])); // �o�̳B�z
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

// ���ƨϥ� Promise
function example_9_reuse(){
    let v = 1;
    // ���A�w�Q�ѪR, ���|���s�ѪR���A
    let p = new Promise((resolve, reject)=> {
        console.log('1-1'); // ����@��
        process.nextTick( ()=>{
            console.log('1-2'); // ����@��
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

// reject �ѳ̪� catch �B�z, ������ then �|�Q���L
function example_10(){
    new Promise((y, n)=>{
        n();
    })
    .then( ()=>console.log('#1') ) // ����
    .then( ()=>console.log('#2') ) // ����
    .catch( ()=>console.log('here') ) // �B�z reject
    .then( ()=> console.log('#3') ); // �������
    
}

function example_11_timeout(){
    new Promise( (y,n)=>{
        setTimeout(()=>{
            n();
        }, 1000);
        
        // ���A�|�Q����
        setTimeout( ()=>{
            y();
        }, 3000);
    }).then( ()=>console.log('y?'), ()=>console.log('n?'));
}

function example_12_resolve(){
    // ������ȥ�� then
    Promise.resolve(100)
        .then( 
            v => console.log(`here #1: ${v}`), 
            ()=>console.log('ignore') 
        );
    
    // ���|Ĳ�o reject
    Promise.resolve(new Error('test'))
        .then( 
            v => console.log(`here #2: ${v}`), 
            ()=>console.log('ignore') 
        );
        
    
    // �ѪR promise ��M�w then or catch
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
    // ������ȥ�� catch
    Promise.reject(100)
        .then( 
            ()=>console.log('ignore'), 
            v => console.log(`here #1: ${v}`)
        );
    
    // ���� promise, �� promise �����ȶǵ� catch
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

function main(){
    // example_1();
    // example_2();
    // example_3_wall_all();
    // example_4_race();
    // example_5_waitN();
    
    // example_6_sequential();
    // example_7_throw_error();
    // example_8_with_request();
     example_9_reuse();
    // example_10();
    // example_11_timeout();
    // example_12_resolve();
    // example_13_reject();
}
main();
