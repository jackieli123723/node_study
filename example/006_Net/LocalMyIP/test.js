const
    dns = require('dns'),
    os = require('os');

function listMyIp(){
    let interfaces = os.networkInterfaces();
    let addresses = {};
    for (var k in interfaces) {
        // console.log(k);
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses[k]= address;
            }
        }
    }

    return addresses;
}

function hostname2ip(hostname){
    hostname = hostname || os.hostname();
    
    return new Promise( (y,n)=>{
        dns.lookup(hostname, function (err, addr, fam) {
            if(err){
                n(err);
            }else{
                y(addr);
            }
        });
    });
}

function main(){
    Promise.all([
        hostname2ip('localhost'),
        hostname2ip('127.0.0.1'),
        hostname2ip()
    ])
        .then( console.log )
        .catch( console.error);
        
     console.log(listMyIp());
}
   
module.exports.listMyIp = listMyIp;
module.exports.hostname2ip = hostname2ip;

if (require.main === module) {
    main();
}
