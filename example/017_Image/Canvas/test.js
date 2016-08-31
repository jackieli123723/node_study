const
    Canvas = require('canvas'),
    fs = require('fs');
    
function main(){
    let canvas = new Canvas(640, 480, 'svg');
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(0,0,200,200);
    ctx.fillStyle='#ff0000';
    ctx.fill();
    fs.writeFile('a.svg', ctx.toBuffer());
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
