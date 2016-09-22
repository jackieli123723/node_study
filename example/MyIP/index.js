const
    {httpGet} = require('../004_Web/request-test/index');
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
