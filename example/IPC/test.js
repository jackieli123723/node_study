const cp = require('child_process');

function exec(){
    cp.exec('dir /a ' + __dirname, (err, stdout, stderr) =>{
        if(err){
            console.error(err);
        }else{
            console.log(stdout);
        }
    });
}

function spawn(){
    let dir = cp.spawn('ls', ['-al', __dirname]);
    dir.stdout.on('data', (data)=> console.log(`stdout.data >> ${data}`));
    dir.stderr.on('data', (data)=> console.log(`stderr.data >> ${data}`));
    dir.on('close', code => console.log(`exit code: ${code}`));
}

function fork(){
    console.log(`Parent: ${process.pid}`);
    let child = cp.fork(__dirname + '/worker.js');
    child.on('close', code => console.log(`Child Exit Code: ${code}`));
    child.on('message', msg => console.log(`from child: ${msg}`));
    child.send( new Date());
    child.send({'data': 'hello worker'});
}


function main(){
    // exec();
    // spawn();
    // fork();
}
    
main();



