const 
    fs = require('fs'),
    qr = require('qr-image'),
    {createQR} = require('./index');
    
function main(){
    let img = qr.image('hello arick', {
        type: 'png', // png. svg, eps, pdf
        size: 5 // width = height = 45
    });
    img.pipe( fs.createWriteStream('a.png'));
    
    createQR({
        writer: fs.createWriteStream('b.png'),
        msg: 'Arick QR'
    });
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
