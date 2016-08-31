const 
    colors = require('colors');
    
function main(){
    console.log('hello world'.green);
    console.log(colors.red('hello world'));
    
    console.log('hello world'.blue.bgWhite);
    console.log(colors.yellow.bgMagenta('hello world'));
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
