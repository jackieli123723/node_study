const
    request = require('request'),
    request_debug = require('request-debug'),
    progress = require('request-progress'),
    fs = require('fs');
  
//request_debug(request);
//request.debug = true;

// 忽略 HTTPS 證書檢查
// http://stackoverflow.com/questions/19665863/how-do-i-use-a-self-signed-certificate-for-a-https-node-js-server
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

function httpGet(){
    request({
        'method' : 'get',
        'url': 'https://api.ipify.org?format=json',
        'headers': {
            'User-Agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)'
        }
    }, (err, resp) => {
        if(err){
            console.log(err);
            return;
        }
        let jd = JSON.parse(resp.body);
        console.log(jd.ip);
    });
}

function formPost(){
    let jar = request.jar();
    request({
        'method' : 'post',
        'url': 'http://127.0.0.1:3000/rest/login',
        'headers': {
            'User-Agent': 'xxxApp/Windows'
        },
        'form':{
            'UserID':'test',
            'Passwd':'123'
        },
        'jar' : jar
    }, (err, resp) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(resp.body);
        console.log(jar);
    });
}

function jsonPost(){
    request({
        'method' : 'post',
        'url': 'http://127.0.0.1:3000/rest/hello/world',
        'headers': {
            'User-Agent': 'xxxApp/Windows'
        },
        'body': {'msg': 'secret'},
        'json': true
    }, (err, resp) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(resp.body);
    });
}

function fileDownload(){
    
    request.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg")
        .on('response', (resp)=>{
            let file = fs.createWriteStream("file.jpg");
            resp.pipe(file);
        });
}

function readLargeText(){
    let readline = require('readline');
    request.get("http://127.0.0.1/api/down/1463466389,1466069296")
        .on('response', (resp)=>{
            console.log('==response==');
            if(resp.statusCode==200){
                let total = -1;
                let recv = 0;
                let rl = readline.createInterface({
                  input: resp
                });
                rl.on('line', (line) => {
                  console.log(line);
                });
            }
        });
}

function request_promise(){
    const rp = require('request-promise');
    rp({
        'method' : 'get',
        'url': 'https://api.ipify.org',
        'qs': {
            'format': 'json'
        },
        'headers': {
            'User-Agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)'
        }
    })
        .then(body => {
            console.log(body);
        })
        .catch(console.error);
}

function request_head(){
    request.head('http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg', function(err, resp){
        if(err){
        }else{
            console.log(resp.headers);
        }
    });
}

function downloadProgress(link, fn){
    return new Promise( (y,n)=>{
        progress(request(link), {
                throttle: 2000,                    // Throttle the progress event to 2000ms, defaults to 1000ms 
                delay: 1000,                       // Only start to emit after 1000ms delay, defaults to 0ms 
                //lengthHeader: 'x-transfer-length'  // Length header to use, defaults to content-length 
            })
            //.on('close', function(){
            //    y(fn);
            //})
            .on('end', function(){
                y(fn);
            })
            .on('progress', function (state) {
                //console.log('progress', state);
                let total = '--';
                let progress = '--';
                if(state.size.total ){
                    total = state.size.total;
                    progress = `${state.percentage * 100}%`;
                }
                process.stdout.write(`\r ${progress}(${state.size.transferred}/${total}), ${(state.speed/1024).toFixed(2)}KB/sec           `);
            })
            .on('error', function (err) {
                n(err);
            })
            .pipe( fs.createWriteStream(fn) );
    });
}

module.exports.downloadProgress =downloadProgress;

function main(){
    // httpGet();
    // formPost();
    // fileDownload();
    // readLargeText();
    // jsonPost();
    // request_head();
    
    // request_promise();
    let link = 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_5mb.mp4';
    let fn = 'big_buck_bunny_360p_5mb.mp4';
    downloadProgress(link, fn)
        .then( console.log )
        .catch(console.error);
}

if (require.main === module) {
    main();
}