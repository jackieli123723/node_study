const
    {httpGet, debug} = require('../004_Web/request-test/index');
module.exports.ipify = function(){
    return httpGet("https://api.ipify.org?format=json", false)
        .then( body => {
            return JSON.parse(body).ip;
        });
};
module.exports.chinaz = function(){
    return httpGet("http://ip.chinaz.com/getip.aspx", false)
        .then( body => {
            // console.log(`[${body}]`);
            return /ip:'(.*?)',/.exec(body)[1];
        });
};

// https://yooooo.us/2016/ipip-tk?variant=zh-tw
module.exports.ipip = function(){
    return httpGet("https://ipip.tk/ip", false)
        .then( body => {
            return body;
            // console.log(`[${body}]`);
            // return /ip:'(.*?)',/.exec(body)[1];
        });
};

module.exports.taobao_getIpInfo = function(ip) {
    // debug(true);
    return httpGet({
        method: 'post',
        url: 'http://ip.taobao.com/service/getIpInfo2.php',
        form: {
            'ip' : ip
        }
    }).then( c => JSON.parse(c));
};