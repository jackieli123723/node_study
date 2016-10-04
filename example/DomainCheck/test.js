const
    query = require('./index').query;

function main(){
    let domain = 'baidu.cn';
    query(domain)
        .then(console.log)
        .catch(console.error);
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
