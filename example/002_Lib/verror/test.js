const 
    {VError} = require('verror');
    
function ex1(){
    throw  new VError({
        'name': 'ConnectionError',
        'cause': new Error('for test'),
        'info': {
            'errno': 'ECONNREFUSED',
            'remote_ip': '127.0.0.1',
            'port': 215
        }
    }, 'failed to connect to "%s:%d"', '127.0.0.1', 215);
}
function main(){
    try{
        ex1();
    }catch(ex){
        if(ex.name == 'ConnectionError'){
            console.log(ex);
        }else{
            console.log('Wow....');
        }
    }
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
