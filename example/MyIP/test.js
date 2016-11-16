const
    api = require('./index');

function test(p){
    p.then( console.log)
     .catch(console.error);
       
}

function main(){
    // test(api.ipify());
    // test(api.chinaz());
    // test(api.ipip());
    test(api.taobao_getIpInfo('219.144.202.12'));
        
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
