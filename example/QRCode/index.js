const 
    fs = require('fs'),
    qr = require('qr-image');
    
function createQR(cfg){
    cfg = Object.assign({
        type: 'png',
        writer: null,
        msg: 'Hello',
        size: 5,
        margin: 4
    }, cfg);
    let img = qr.image(cfg.msg, cfg);
    img.pipe( cfg.writer );
}
    
module.exports = {createQR};