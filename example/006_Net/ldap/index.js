const ldap = require('ldapjs');

function getClient(cfg){
    cfg = Object.assign({
        url: null
    }, cfg);
    
    
    let client = ldap.createClient(cfg);
    return {
        client,
        destroy: ()=>client.destroy(),
        search: (base_rule, filter={})=>{
            return new Promise( (y,n)=>{
                client.search(base_rule, filter, (err, res)=>{
                    if(err){
                        n(err);
                        return;
                    }
                    y(res);
                });
                
            });
        }
    };
}
module.exports = {
    getClient
};
