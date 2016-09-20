const 
    OpenCC = require('opencc'),
    opencc = new OpenCC('s2twp.json');
    
function toT(name){
    return new Promise((y,n)=>{
        opencc.convert(name, (err, converted) =>{
            if(err){
                y(name);
            }else{
                y(converted);
            }
        });
    });
}

module.exports.toT = toT;