const debug = require('debug');
const my = debug('my');

function main(){
    my('hello debug');
    console.log('hello world');
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
