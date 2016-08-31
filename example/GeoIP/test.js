const
    geoip = require('geoip-lite');
    
function main(){
    console.log(geoip.lookup('101.8.99.252'));
    
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
