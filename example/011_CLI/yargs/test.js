const 
    argv = require('yargs').argv;
    
function main(){
    console.log(argv);
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
