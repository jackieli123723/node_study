const
    config = require('./config'),
    {querySingleTrade} = require('./index');

function main(){
    querySingleTrade(Object.assign(config,{
        'out_trade_no' : '1000353447',
    })).then(console.log).catch(console.error);
    
}
    
if (require.main === module) {
    main();
}
