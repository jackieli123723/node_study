const 
    cmder = require('commander');
    
function main(){
    // node --help
    // node -h
    cmder
        .version('0.0.1')
        .option('-y, --yes', 'Say Yes') // bool
        .option('-n, --number [number]', 'Given a number') // 不會自動轉換, 需自行檢查處理
        .option('-b, --bool [boolean]', 'given a number', true) // 有預設值
        .parse( process.argv );
    // node test.js -y 
    // node test.js -y 123 -b -n 123
    // node test.js -y 123 -b -n 'ab'
    console.log(cmder.yes);
    console.log(cmder.number);
    console.log(cmder.bool);
}
    
main();