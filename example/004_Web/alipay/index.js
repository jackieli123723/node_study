const
    {parseString} = require('xml2js'),
    AlipaySubmit = require('alipay/lib/alipay_submit.class.js').AlipaySubmit;

/**
 * ³æµ§­q³æ¬d¸ß
 *
 */
function querySingleTrade(cfg){
    cfg = Object.assign({
        'sign_type':'md5',
        'input_charset' : 'gbk'
    },cfg);
    
    return new Promise((y,n)=>{
        let alipaySubmit = new AlipaySubmit(cfg);
        // console.log(cfg);
        alipaySubmit.buildRequestHttp({
            'service' : 'single_trade_query',
            'partner' : cfg['partner'],
            'out_trade_no' : cfg['out_trade_no']
        }, (body)=>{
            parseString(body, (err,result)=>{
                if(err){
                    n(err);
                    return;
                }
                
                if(result.alipay.is_success[0] == 'F'){
                    n( result.alipay.error[0] );
                    return;
                }
                // console.log(result);
                y(result);
            });
        });
    });
}

module.exports = {
    querySingleTrade
};
    
