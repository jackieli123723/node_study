const
    nomnom = require('nomnom');

function test_1(){
    // node test.js a b -c=1 -d 2 --e 3 --f=4
    // { '0': 'a', '1': 'b', d: 2, e: 3, f: 4, _: [ 'a', 'b' ] }
    console.log(nomnom.parse());
}

function test_2(){
    // node test.js -h
    let opts = nomnom
        .option('debug', {
            'abbr': 'd',
            'flag': true,
            'help': 'debug args'
        })
        .option('name', {
            'abbr': 'n',
            'default': 'arick', // 預設值
            'help': 'debug args'
        })
        .option('name', {
            'abbr': 'n',
            'default': 'arick', // 預設值
            'help': 'debug args'
        })
        .parse();
    console.log(opts);
}
    
function main(){
    // test_1();
    test_2();
}
    
main();