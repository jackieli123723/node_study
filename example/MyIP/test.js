const
    api = require('./index');

function test(p){
    p.then( console.log)
     .catch(console.error);
       
}

function main(){
    // test(api.ipify());
    test(api.chinaz());
        
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
