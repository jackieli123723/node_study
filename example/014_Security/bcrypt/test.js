const
    promisify = require("promisify-node"),
    bcrypt = promisify(require('bcrypt-nodejs'));
    
    
function main(){
    let password = '1234';
    bcrypt.genSalt(5)
        .then(salt => {
            return bcrypt.hash(password, salt, null);
        })
        .then( hash => {
            console.log(`Hash: ${hash}`);
            return bcrypt.compare(password, hash);
        })
        .then( match => {
            console.log(match);
        })
        .catch( console.error );
    
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
