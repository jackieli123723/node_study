const 
    cmder = require('commander');
    
function main(){
    // node --help
    // node -h
    cmder
        .version('0.0.1')
        .option('-y, --yes', 'Say Yes') // bool
        .option('-n, --number [number]', 'Given a number') // ���|�۰��ഫ, �ݦۦ��ˬd�B�z
        .option('-b, --bool [boolean]', 'given a number', true) // ���w�]��
        .parse( process.argv );
    // node test.js -y 
    // node test.js -y 123 -b -n 123
    // node test.js -y 123 -b -n 'ab'
    console.log(cmder.yes);
    console.log(cmder.number);
    console.log(cmder.bool);
}
    
main();