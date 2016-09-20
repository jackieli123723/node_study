const
    progress = require('request-progress'),
    cheerio = require('cheerio'),
    request = require('request'),
    fs = require('fs'),
    rp = require('request-promise');

module.exports.httpGet=function(url, jq=true,encoding='utf-8'){
    let cfg = {
        uri: url.trim(),
        timeout:10000,
        // encoding: null,
        headers: {
            'User-Agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)'
        }
    };
    if(encoding != 'utf-8'){
        cfg['encoding'] = null;
    }
    if(jq===true){
        cfg['transform'] = function (body) {
            if(encoding == 'gb2312'){
                let gbk_to_utf8_iconv = new Iconv('GBK', 'UTF-8//TRANSLIT//IGNORE');
                body = gbk_to_utf8_iconv.convert(body);
            }
            return cheerio.load(body, { decodeEntities: false });
        };
    }
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
                n(err);
            })
            .pipe( fs.createWriteStream(fn) );
    });
}

module.exports.downloadProgress =downloadProgress;