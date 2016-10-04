const
    toObject = require('../010_File/xml2js-test/index').toObject,
    httpGet = require('../004_Web/request-test/index').httpGet;
function query(domain){
    return httpGet(`http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=${domain}`, false)
        .then( toObject)
        .then( jd => {
            let p = jd.property;
            // console.log(p.returncode);
            // console.log(p.key);
            // console.log(p.original);
            let [code,msg] = p.original[0].split(':').map( s => s.trim() );
            if(code == '211'){
                return {
                    success: true,
                    used: true
                };
            }else if(code == '210'){
                return {
                    success: true,
                    used: false
                };
            }else{
                return {
                    success: false,
                    code: code,
                    msg: msg
                }
                // console.log(code);
                // console.log(msg);
                // throw new Exception('error');
            }
            
        });
}

module.exports.query = query;