const dnsd = require('dnsd'),
      dns = require('dns');
      
let cache = {
    '91tix.com' : '1.2.3.4',
};

let cache_ip6 = {
};
function main(){
    // let 
    dnsd.createServer(function(req, res) {
        console.log(res.question);
        let _cache, 
            _family,
            _type = res.question[0].type;
        if(res.question[0].type == 'A'){
            _cache = cache;
            _family = 4;
        // }else if (res.question[0].type == 'AAAA'){
            // _cache = cache_ip6;
            // _family = 6;
        }else{
            res.end();
            return;
        }
            
        let ns = res.question[0].name;
        if(ns in _cache){
            // console.log('cache');
            res.end(_cache[ns]);
        }else{
            // console.log(ns);
            dns.lookup(ns, {
                all:true, 
                hints: dns.ADDRCONFIG | dns.V4MAPPED,
                family: _family
            }, (err, addresses, family) => {
                if(err){
                    console.error(err);
                    res.end();
                    return;
                }
                console.log('addresses:', addresses);
                for(let addr of addresses){
                    res.answer.push({
                        name:ns, 
                        type: _type, 
                        data: addr.address
                    });
                }
                _cache[ ns ] = res.answer;
                res.end(  );
            });
        }
    }).listen(53, '127.0.0.1')
}
    
main();