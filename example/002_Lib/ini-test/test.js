let ini = require('ini'),
    co = require('co'),
    thunkify = require('thunkify'),
    fs = require('fs'),
    fn = 'test.ini',
    writeFile = thunkify(fs.writeFile),
    readFile = thunkify(fs.readFile);
    
function test_write_ini(){
    co(function*(){
       let c = ini.encode({
            'name':'arick',
            'age':31
        }, 'Test');
        console.log(c);
        yield writeFile(fn, c);
        
    }).catch(function(err){
        console.log(err);
    });
}

function test_read_ini(){
    co(function*(){
        let c = yield readFile(fn);
        let config = ini.decode(new String(c) );
        console.log(config['Test']['name']);
    }).catch(function(err){
        console.log(err);
    });
}
function main(){
    test_write_ini();
    test_read_ini();
}

main();

