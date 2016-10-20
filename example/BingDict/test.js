const 
    {httpGet} = require('../004_Web/request-test/index'),
    {newError} = require("../002_Lib/verror"),
    API='http://xtk.azurewebsites.net/BingDictService.aspx'

function main(){
    let word = 'contact';
    httpGet({
        url: API,
        qs: {Word: word},
        encoding: 'utf-8'
    }, false)
        .then( c => {
            let jd = JSON.parse(c);
            if(!(jd['pronunciation'])){
                throw newError({name: 'NotFoundError'});
            }
            // console.log(jd);
            console.log(`美音：[${jd['pronunciation']['AmE']}] 英音：[${jd['pronunciation']['BrE']}]`);
            
            for(let v of jd['defs']){
                console.log(`${v.pos}:${v.def}`);
            }
            
            console.log('例句');
            for(let v of jd['sams']){
                console.log(`英:${v.eng}`);
                console.log(`中:${v.chn}`);
                console.log();
            }
        });
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
