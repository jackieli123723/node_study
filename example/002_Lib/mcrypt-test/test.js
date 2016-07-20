const mcrypt = require('mcrypt');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

function list_support_mode(){
    var algos = mcrypt.getModeNames();
    console.log(algos);
}

function list_support_algorithm(){
    var algos = mcrypt.getAlgorithmNames();
    console.log(algos);
}

function rijndael_128_cfb(key, ciphertext){
    key = key.substr(0,16);
    let data_buf = new Buffer(ciphertext, 'base64'),
        key_buf = new Buffer(key),
        iv_dec = data_buf.slice(0, 16),
        ciphertext_dec = data_buf.slice(16);
        
    // console.log(iv_dec.toString('base64') == 'nVBsfuUwqop6zbSIabjFpA==');
    // console.log(ciphertext_dec.toString('base64') == 'ueR0okA91VVxcVc0uUUVhCfx2Hxyhx0UQr7ij2CQ');
    
    let d = mcrypt.MCrypt('rijndael-128', 'cfb');
    d.open(key_buf, iv_dec);
    let data_dec = d.decrypt(ciphertext_dec);
    
    console.log(data_dec.length);
    // console.log(data_dec);
    // console.log(data_dec.toString('hex'));
    console.log('->' + data_dec.toString().trim() +'<-');
    // console.log(data_dec == 'hello worldarick01234567890123');
}

function main(){
    list_support_algorithm();
    list_support_mode();
    
    // rijndael_128_cfb('arick01234567890' ,'nVBsfuUwqop6zbSIabjFpLnkdKJAPdVVcXFXNLlFFYQn8dh8cocdFEK+4o9gkA');
    // rijndael_128_cfb('arick01234567890', 'QE73aN8bf/S2QT0HuchV59jPRaiZW0SYWn+UlmqzCxapldexQ1ZpKeINt0ntiI9+Cs0qYA==');
    // rijndael_128_cfb('arick01234567890', '3C+1aMxcslwRoJCnEX80d0aghGc4fc3BynvywJyDIm1Cfoiip7M6O+SDaTPclnZ7');
    rijndael_128_cfb('0123456789123456', 'g+OOw6xI3LF6q2PHT6Tgh6597CQRGwzZrZOJyWd98OInRacUEnBFcQYirBp6T+YKefTeNAnwxSeuLi5uoE91Iw==');
}

main();
