const 
    fs = require('fs'),
    qr = require('qr-image');
    
function main(){
    let img = qr.image('hello arick', {
        type: 'png', // png. svg, eps, pdf
        size: 5 // width = height = 45
    });
    img.pipe( fs.createWriteStream('a.png'));
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
