const
    request = require('request'),
    request_debug = require('request-debug'),
    progress = require('request-progress'),
    http = require('http'),
    downloadProgress = require('./index').downloadProgress,
    fs = require('fs');
  
  // request_debug(request);
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


function test_download_progress(){
    let link = 'http://www.sample-videos.com/video/mp4/360/big_buck_bunny_360p_5mb.mp4';
    let fn = 'big_buck_bunny_360p_5mb.mp4';
    downloadProgress(link, fn)
        .then( console.log )
        .catch(console.error);
}

function request_with_proxy(){
    let sid = '23344282';
    let format = '';
    let proxy_host = '222.161.3.163';
    let proxy_port = 9797;
    let proxy = `http://${proxy_host}:${proxy_port}`;
    let url = `http://music.baidu.com/data/music/fmlink?songIds=${sid}`;
    request({
        method: "GET", 
        headers: {"Cache-Control" : "no-cache"}, 
        proxy: proxy,
        url: url
    }, (err, resp, body)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log(body);
        let jd = JSON.parse(body);
        for(let song of jd.data.songList){
            console.log( song.songName);
            console.log( song.artistId);
            console.log( song.artistName);
            console.log( song.albumId);
            console.log( song.albumName);
            console.log( song.songPicSmall);
            console.log( song.songPicBig);
            console.log( song.lrcLink);
            console.log( song.songLink);
            console.log( song.format);
            console.log( song.rate);
            console.log( song.size);
        }
    });
}

function getResponseHeader(){
    request('https://www.google.com', (err, resp, body)=>{
    // console.log(body);
        console.log(resp.headers);
    });
}

function main(){
    // httpGet();
    // formPost();
    // fileDownload();
    // readLargeText();
    // jsonPost();
    // request_head();
    
    // request_promise();
    // test_download_progress();
    // request_with_proxy();
    getResponseHeader();
    
}

if (require.main === module) {
    main();
}