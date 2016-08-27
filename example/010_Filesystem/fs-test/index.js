const 
    path = require('path'),
    fs = require('fs');

let File = {
    read : (fn)=>new Promise((y,n)=>{
        fs.readFile(fn, (err, c)=>{
            if(err){
                n(err);
            }else{
                y(c);
            }
        });
    }),
    write : (fn, c) => new Promise( (y,n) => {
        fs.writeFile(fn, c, (err)=>{
            if(err){
                n(err);
            }else{
                y();
            }
        });
    }),
    exists: (fn)=>new Promise( (y,n) => {
        // 判斷文件是否存在
        fs.exists(fn, function( exists ){
            y( exists );
        });
    }),
    stat: (fn)=>new Promise( (y,n) => {
        // 查看文件狀態
        fs.stat(fn, function(err, stat){
            if(err){
                n(err);
            }else{
                y(stat);
            }
        });
    }),
    rename: (old_name, new_name) =>new Promise( (y,n) => {
        // 修改文件名稱
        fs.rename(old_name, new_name,function(err){
            if(err){
                n(err);
            }else{
                y();
            }
        });
    }),
    unlink: (fn)=>new Promise( (y,n) => {
        // 查看文件狀態
        fs.unlink(fn, function(err){
            if(err){
                n(err);
            }else{
                y();
            }
        });
    }),
    copy: (old_name, new_name) =>new Promise( (y,n) => {
        let rd = fs.createReadStream(old_name);
        rd.on("error", function(err) {
            n(err);
        });
        let wr = fs.createWriteStream(new_name);
        wr.on("error", function(err) {
            n(err);
        });
        wr.on("close", function(ex) {
            y();
        });
        rd.pipe(wr);

    }),
    count: (target)=>new Promise((y,n)=>{
        let file_count = 0;
        let folder_count = 0;
        
        fs.readdir(target, (err, files)=>{
            if(err){
                n(err);
                return;
            }
            
            let jobs = [];
            for(let f of files){
                jobs.push(new Promise((y,n)=>{
                    fs.lstat(path.join(target,f), (err, stat)=>{
                        if(err){
                            n(err);
                            return;
                        }
                        if(stat.isDirectory()){
                            ++folder_count;
                        }else{
                            ++file_count;
                        }
                        y();
                        // console.log(`${f} folder? ${stat.isDirectory()}`);
                    });
                }));
            }
            
            Promise.all( jobs)
                .then( ()=>{
                    y({
                        files: file_count, 
                        folders: folder_count
                    });
                    
                })
                .catch(n);
        });
    })
};

function test_File(){
    let fn = __dirname + '/test.data';
    let new_fn = __dirname + '/test.data.new';
    File.write(fn, 'hello file')
        .then( ()=> {
            console.log('write success');
            return File.exists(fn);
        })
        .then( v => {
            console.log(`exists? ${v}`);
            return File.read( fn );
        })
        .then( v=> {
            console.log(`fn content: ${v.toString()}`)
            return File.rename(fn, new_fn)
        })
        .then( v => {
            console.log(`rename success`);
            return File.stat( new_fn );
        })
        .then( v => {
            console.log(`file state : ${JSON.stringify(v)}`);
            return File.copy(new_fn, fn);
        })
        .then( ()=>{
            console.log('copy success');
            return Promise.all([
                File.unlink( fn ),
                File.unlink( new_fn )
            ]);
        })
        .then( v => {
            console.log(['final', v]);
        })
        .catch( reson => console.log(reson) );
}



function main(){
    // test_File();
    File.count('d:/tmp')
        .then( v =>{
            console.log(`Files: ${v.files}, Foders: ${v.folders}`);
        })
}
module.exports = File;

if (require.main === module) {
    main();
}
