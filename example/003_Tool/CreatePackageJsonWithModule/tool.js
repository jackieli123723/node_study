let fs = require("fs"),
    process = require('process'),
    path = require('path'),
    thunkify = require('thunkify'),
    co = require('co');

function main() {
    let argv = process.argv;
    if(argv.length < 3){
        let t = argv[1].split(path.sep);
        console.log(`node ${t[t.length-1]} node_modules_path`);
        return;
    }
    
    let fs_readdir = thunkify(fs.readdir),
        fs_stat = thunkify(fs.stat),
        fs_readFile = thunkify(fs.readFile),
        fs_writeFile = thunkify(fs.writeFile),
        base_dir = argv[2],
        fn_package = path.join(base_dir, 'package.json'),
        jd = {dependencies:{}};

        
    co(function*(){
        let dir_node_modules = path.join(base_dir, 'node_modules');
        if(!fs.existsSync(dir_node_modules)){
            throw new Error(dir_node_modules + ' not found');
        }
        if(fs.existsSync(fn_package)){
            let c = yield fs_readFile(fn_package);
            jd = JSON.parse(c);
        }
        let dirs = yield fs_readdir(dir_node_modules);
        for(let dir of dirs){
            if (dir.indexOf(".") !== 0) {
                let packageJsonFile = path.join(dir_node_modules, dir, "package.json");
                if (fs.existsSync(packageJsonFile)) {
                    let c = yield fs_readFile(packageJsonFile);
                    let json = JSON.parse(c);
                    jd['dependencies'][json.name] = json.version;
                }
            }
        };
        c = JSON.stringify(jd, null, 2);
        yield fs_writeFile(fn_package, c);
        console.log(c);
    }).catch(function(err){
        console.trace(err);
    });

}

main();