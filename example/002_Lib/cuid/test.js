const   
    cuid = require('cuid');
function main(){
    console.log( cuid() );
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
