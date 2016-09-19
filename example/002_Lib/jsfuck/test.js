const 
    {JSFuck} = require('jsfuck');
    
function main(){
    let c = JSFuck.encode(`console.log(1);`);
    console.log(c);
    console.log(eval(c));
    new Function(eval(c))();
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
