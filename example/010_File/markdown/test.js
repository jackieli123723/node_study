const 
    marky = require("marky-markdown");

function main(){
    console.log(marky("# hello, I'm markdown").html());
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
