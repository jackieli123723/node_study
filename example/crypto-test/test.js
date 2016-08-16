const crypto = require('crypto')
      fs = require('fs');


function sha256(){
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                       .update('I love cupcakes')
                       .digest('hex');
    console.log(hash);
}

function hmac_test(){
    const hashs = crypto.getHashes();
    const msg = 'hello crypto.HMAC';
    const key = '0123456789123456';
    for(let hash_name of hashs){
        console.log(`== HMAC.${hash_name} ==`);
        console.log(crypto.createHmac(hash_name, key)
                       .update(msg)
                       .digest('hex'));
    }
}

function hash_test(){
    const hashs = crypto.getHashes();
    const msg = 'hello crypto.hash';
    for(let hash_name of hashs){
        console.log(`== Hash.${hash_name} ==`);
        console.log(crypto.createHash(hash_name)
                       .update(msg)
                       .digest('hex'));
    }
}

function cipher_test(){
    // const algos = crypto.getCiphers();
    const msg = 'hello crypto.cipher';
    const key = '1471341432865';
    let algo = 'aes192';
    console.log(`== Cipher.${algo} ==`);
    let cipher  = crypto.createCipher(algo, key)
    let encrypted = cipher.update(msg, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
    
    const decipher = crypto.createDecipher(algo, key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log(decrypted);
}

function file_md5(){
    let md5 = crypto.createHash('md5');
    fs.createReadStream('test.js')
       .on('data', function(v){
            md5.update(v);
       }).on('end', function(){
            console.log(md5.digest('hex'));
       });
}

function random_string(){
    let buf = crypto.randomBytes(16);
    console.log('== random string ==');
    console.log(buf.toString('hex'));
    console.log(buf.toString('base64'));
}

function main(){
    // sha256();
    // hash_test();
    // hmac_test();
    // cipher_test();
    // random_string();
    // file_md5();
    
}
main();
