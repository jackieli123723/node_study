const
    progress = require('request-progress'),
    cheerio = require('cheerio'),
    request = require('request'),
    GBK2UTF8 = require('..\\..\\iconv\\index').GBK2UTF8,
    fs = require('fs'),
    rp = require('request-promise');

let USER_AGENT = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)';
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
    if(jq===true){
        cfg['transform'] = function (body) {
            if(encoding == 'gb2312'){
                body = GBK2UTF8(body);
            }
            return cheerio.load(body, { decodeEntities: false });
        };
    }
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
 * code = 0 жие\
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

// ?? chrome extension crx
// "Give Me CRX"
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

module.exports = {
    getCrx,
    getUserAgent,
    debug,
    cheerio,
    request,
    checkFile,
    un53share,
    downloadProgress,
    httpGet,
    putUserAgent
};
