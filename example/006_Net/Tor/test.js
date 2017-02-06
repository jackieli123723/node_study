const
    {ipReNew} = require('./index');

function main(){
    ipReNew({
        host:'127.0.0.1',
        port: 9051
    }).then( console.log ).catch( console.error);
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
