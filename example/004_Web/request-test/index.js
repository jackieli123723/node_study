const
    progress = require('request-progress'),
    cheerio = require('cheerio'),
    request = require('request'),
    
    // socks = require('socks'),
    {Big52UTF8, GBK2UTF8} = require('..//..//iconv//index'),
    fs = require('fs'),
    rp = require('request-promise');

let USER_AGENT = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)';

/* helper function to create a SOCKS agent to be used in the request library
 * */
function createAgent (cfg) {
  let proxy_setup = Object.assign({
        ipaddress: 'localhost',
        port: 9050,
        type: 5
    }, cfg.proxy);
  
  let isHttps = cfg.url.indexOf('https://') >= 0;

  let socksAgent = new socks.Agent({
      proxy: proxy_setup,
    },
    isHttps, // https
    false // rejectUnauthorized option passed to tls.connect().
  );
  
  return socksAgent;
}
// -- from tor-request

function putUserAgent(v){
    USER_AGENT = v;
};

function getUserAgent(){
    return USER_AGENT;
}

function debug(on){
    request.debug = (on === true);
    rp.debug = (on === true);
}

function httpGet(url, jq=true,encoding='utf-8'){
    
    let cfg = {
        timeout:10000,
        headers: {
            'User-Agent': USER_AGENT
        }
    };
    if(typeof(url) == 'object'){

        encoding = url.encoding;
        jq = (url.jq === true);
        cfg = Object.assign({},cfg, url);
        if(cfg.tor){
            let isHttps = cfg.url.indexOf('https://') >= 0;
            if(isHttps){
                cfg.agentClass = require('socks5-https-client/lib/Agent');
            }else{
                cfg.agentClass = require('socks5-http-client/lib/Agent');
            }
            cfg.agentOptions = {
                socksHost: cfg.tor.host,
                socksPort: cfg.tor.port
            };
            // console.log(cfg);
            cfg.tor = null;
        }
        if(cfg.cookie){
            let j = request.jar();
            let cookie = request.cookie(cfg.cookie);
            j.setCookie(cookie, cfg.url);
            cfg.jar = j;
        }
        
        
    }else{
        cfg.url = url.trim();
    }
    if(encoding != 'utf-8'){
        cfg['encoding'] = null;
    }
    
    
    
    cfg['transform'] = function (body, response, resolveWithFullResponse) {
        if(encoding == 'big5'){
            body = Big52UTF8(body);
        
        }else if(encoding == 'gb2312'){
            body = GBK2UTF8(body);
        }
        if(jq===true){
            body = cheerio.load(body, { decodeEntities: false });
        }
        
        if(resolveWithFullResponse){
            return {
                body,
                response
            };
        }
        return body;
    };
    // console.log(cfg);
    return rp(cfg);
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
                    progress = `${parseInt(state.percentage * 100)}%`;
                }
                process.stdout.write(`\r ${progress}(${state.size.transferred}/${total}), ${(state.speed/1024).toFixed(2)}KB/sec           `);
            })
            .on('error', function (err) {
                n({error: err, fn: fn, link: link});
            })
            .pipe( fs.createWriteStream(fn) );
    });
}

/**
 * code = 0 жие/
 */    
function checkFile(fn, url_cfg){
    return new Promise( (y,n)=>{
        fs.stat(fn, (err, stats)=>{
            if(err){
                y({code: 1, error: err});
                return;
            }
            if(stats.size == 0){
                y({code: 2});
                return;
            }
            
            request(Object.assign(url_cfg,{
                'method' : 'head'
            }), function(err, resp){
                //console.log(resp.headers);
                if(err){
                    y({code:3, error: err});
                    return;
                }
                let size = parseInt(resp.headers['content-length']);
                if(stats.size == size){
                    y({code:0});
                }else{
                    y({code:4, local_size: stats.size, remote_size:size});
                }
            });
        });
    });
}


function un53share(url){

    return httpGet({
        url: url,
        jq: true,
        headers: {
            'User-Agent':USER_AGENT,
            Referer:url
        }
    }).then( $ =>{
        let href = $('a.redirect[rel=nofollow]').attr('href');
        return httpGet({
                url: href,
                method: 'head',
                resolveWithFullResponse: true,
                followRedirect: false,
                followAllRedirects: false,
                headers: {
                    'User-Agent':USER_AGENT
                }
            });
            
    }).then( resp =>{
        return resp.headers.location;
    }).catch( err => {
        return err.response.headers.location;
    });
};

/**
 * 
 * ?? chrome extension crx
 * "Give Me CRX"
 */
function getCrx(tab_url, fn='app.crx'){
    let ext_name = tab_url.split('/detail/');
    ext_name = ext_name[1].split('/');
    ext_name = ext_name[0];
		
    let tab_url_split = tab_url.split("/");
    tab_url = tab_url_split[6];
    tab_url = tab_url.split('?');
    tab_url = tab_url[0];
		
    let ccr = 'https://clients2.google.com/service/update2/crx?response=redirect&x=id%3D';
    ccr += tab_url + '%26uc&prodversion=32';
    //return ccr;
    
    return downloadProgress(ccr, fn);
}

/**
 * ??????
 *
 * @param keyword ???, ???????
 * @param int pn ??
 * @return Array [{title.content,unescapedUrl}]????
 */
function queryBaiduPan(keyword, pn=0){
    // http://pan.baidu.com/wap/link?uk=2953827467&shareid=2765600776&third=0
    const start = pn * 10;
    return httpGet({
        url: 'http://pan1234.com/server3',
        qs: {
            q: keyword,
            start: start,
            jsoncallback:'_____'
        },
        encoding: 'utf-8'
    }).then( c => {
        // let s = c.toString();
        return (JSON.parse(c.replace('_____(', '{"result":').replace(")/r/n",'}')));
        
    });
}

function youdaoDict(word){
    // https://github.com/ChestnutHeng/Wudao-dict/blob/master/soup/parse_colins.py
    return httpGet({
        url: 'http://dict.youdao.com/search',
        qs: {
            q: word,
            keyfrom: 'dict.index'
        },
        jq: true
    }).then( $ => {
        let results = [];
        $('#results-contents > #phrsListTab > .trans-container li').each( (idx, el) => {
            results.push($(el).text());
        });
        return results;
    });
}

// https://github.com/talmobi/tor-request/blob/master/index.js
// https://developer.github.com/v3/#authentication
// https://developer.github.com/v3/#user-agent-required
// https://developer.github.com/v3/gists/#create-a-gist
function createGist(cfg){
    // debug(true);
    cfg = Object.assign({
      "description": "the description for this gist",
      "public": false,
      "files": {
        "file2.txt": {
          "content": "String file contents"
        }
      }
    }, cfg);
    
    let def_req = {
        url: 'https://api.github.com/gists',
        method: 'post',
        timeout: 60000,
        body: JSON.stringify({
            description:cfg.description,
            public: cfg.public,
            files: cfg.files
        })
    };
    
    if(cfg.tor){
        def_req.tor = cfg.tor;
    }
    if(cfg.auth){
        def_req['headers'] = {
            'User-Agent': 'Awesome-Octocat-App',
            'Authorization' : "Basic " + new Buffer(cfg.auth.username + ":" + cfg.auth.password).toString("base64")
        };
    }
    // console.log(cfg);
    return httpGet(def_req).then( JSON.parse );
}

/**
 * ????
 *
 * @return 
 * {
 *    type: ????,
 *    errorCode: ????,
 *    elapsedTime: ????,
 *    translateResult: [  
 *      [{
 *        src: ????  
 *        tgt: ????  
 *      }]
 *    ]
 * }   
 */
function youdaoTranslate(c, type='AUTO'){
    const VALID_TYPE = [
        'AUTO', // ??????
        'ZH_CN2EN', // ???>???
        'ZH_CN2JA', // ???>???
        'ZH_CN2KR', // ???>???
        'ZH_CN2FR', // ???>???
        'ZH_CN2RU', // ???>???
        'ZH_CN2SP', // ???>???
        'ZH_CN2PT', // ???>???
        'EN2ZH_CN', // ???>???
        'JA2ZH_CN', // ???>???
        'KR2ZH_CN', // ???>???
        'FR2ZH_CN', // ???>???
        'RU2ZH_CN', // ???>???
        'SP2ZH_CN', // ???>???
        'PT2ZH_CN', // ???>???
    ];
    if(!VALID_TYPE.includes(type)){
        type = 'AUTO';
    }
    return httpGet({
            method: 'post',
            url: 'http://fanyi.youdao.com/translate',
            form: {
                'type':type, 
                'i':c,
                'xmlVersion':'1.8',
                'doctype':'json',
                'keyfrom':'fanyi.web',
                'ue':'UTF-8',
                'action':'FY_BY_CLICKBUTTON',
                'typoResult':'true'
            },
            qs: {
                'smartresult':'dict',
                'smartresult':'rule',
                'smartresult':'ugc',
                'sessionFrom':'dict2.top'
            }
        }).then(JSON.parse);
}

/**
 * ip ????
 *
 */
function ipCipCC(){
    return httpGet({
        url:'http://cip.cc', 
        jq:false,
        encoding: 'utf-8',
        headers: {
            'User-Agent': 'curl/7.49.0'
        }
    });
}

function IpIpTk(cfg={}){
    let url;
    if(cfg.type == 'myip.geo'){ // ??? ip ?????
        url = "https://ipip.tk/";
    }else if(cfg.type == 'hostname.ip'){
        url = `https://ipip.tk/${cfg.hostname}/ip`; // ? hostname ?ip
    }else if(cfg.type == 'hostname.geo'){
        url = `https://ipip.tk/${cfg.hostname}`; // ? hostname ?????
    }else if(cfg.type == 'ip.geo'){
        url = `https://ipip.tk/${cfg.ip}`; // ? ip ?????
    }else{
        url = "https://ipip.tk/ip";
    }
    // console.log(url);
    return httpGet({
        url:url, 
        jq:false,
        encoding: 'utf-8',
        headers: {
            'User-Agent': 'curl/7.49.0'
        }
    });
}

function feedRead(url){
    const FeedParser = require('feedparser');
    const events = require('events');
    let evt = new events.EventEmitter();
    let fp = new FeedParser();
    fp.on('error', err=>{
        evt.emit('error', err);
    });
    
    fp.on('readable', ()=>{
        while(item = fp.read()){
            // console.log(item);
            evt.emit('item', item);
            
            break;
        }
    });
    let req = request(url);
    req.once('error', err => {
        evt.emit('error', err);
    });
    req.on('response', res => {
        if(res.statusCode != 200){
            evt.emit('error', new Error(`Code: ${res.statusCode}`));
            return;
        }
        req.pipe(fp);
    });
    
    
    return evt;    
}

function dnsQuery(hostname){
    return httpGet({
        url: 'https://dns.google.com/resolve',
        qs: {
            name: hostname
        }
    }).then( JSON.parse);
}

function generateChineseName(cfg={}){
    cfg = Object.assign({
        count: 100
    }, cfg);
    return httpGet({
        url: 'http://www.richyli.com/name/index.asp',
        form: {
            'name_count':+cfg.count,
            'break':4
        },
        jq: true,
        encoding: 'big5'
    }).then( $ => {
        let html = $($('table tr:nth-of-type(3) > td:nth-of-type(1)')[0]).html();
        let lines = [];
        for(let line of html.split('<br>')){
            if(!line.includes('times')){
                continue;
            }
            let [name, pid] = line.split(',');
            name = name.trim();
            pid = / <span class="times">(.*)<\/span>/.exec(pid)[1];
            lines.push({name,pid})
        }
        return lines;
    });
}


module.exports = {
    getCrx,
    queryBaiduPan,
    getUserAgent,
    debug,
    cheerio,
    request,
    checkFile,
    un53share,
    downloadProgress,
    httpGet,
    youdaoDict,
    youdaoTranslate,
    putUserAgent,
    createGist,
    feedRead,
    generateChineseName,
    IpIpTk: {
        IpIpTkMyGeo: ()=>IpIpTk({type:'myip.geo'}),
        IpIpTkGeoByIp: (ip)=>IpIpTk({type:'ip.geo', ip}),
        IpIpTkGeoByHostname: (hostname)=>IpIpTk({type:'hostname.geo', hostname}),
        IpIpTkIpByHostname: (hostname)=>IpIpTk({type:'hostname.ip', hostname})
    },
    ipQuery: {
        ipCipCC,
        IpIpTk: ()=>IpIpTk()
    },
    dnsQuery
};
