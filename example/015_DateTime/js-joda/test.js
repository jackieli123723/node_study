const
    joda = require('js-joda');
    
    
function main(){
    var d = joda.LocalDate.parse('2012-12-24').atStartOfDay().plusMonths(2);
    console.log(d);
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
