const 
    {VError} = require('verror');
    
module.exports.newError = function(cfg={}){
    cfg = Object.assign({}, {
        name : 'UnknownError'        
    }, cfg);
    return new VError(cfg);
};