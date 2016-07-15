const crypto = require('crypto');


function sha256(){
    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
                       .update('I love cupcakes')
                       .digest('hex');
    console.log(hash);
}

function main(){
    sha256();
}
main();
