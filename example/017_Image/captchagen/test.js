const 
    {createCaptcha} = require('./index'),
    fs = require('fs');

function main(){
    createCaptcha().then( result => {
        console.log(result);
        fs.writeFile('a.png', result.buffer, (err)=>{
            if(err){
                console.error(err);
            }
        });
    });
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
