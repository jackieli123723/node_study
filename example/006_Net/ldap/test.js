const {getClient} = require('./index');
function main(){

    let client = getClient({
        url: 'ldap://127.0.0.1:389',
    });
    client.search('dc=microsoft',{
        filter: '(&(cn=yuki*)(|(objectclass=person)))',
        scope: 'sub'
    })
        .then( res => {
            res.on('searchEntry', entry=>{
                console.log(entry.object);
            });
            res.on('error', (err)=>{
                console.error(err);
            });
            res.on('end', ()=>{
                client.destroy();
            });
        });
    console.log('hello world');
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
