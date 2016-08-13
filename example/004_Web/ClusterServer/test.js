const cluster = require('cluster'),
      cpus = require('os').cpus().length,
      http = require('http');
if(cluster.isMaster){
    for(let i =0;i<cpus;++i){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal)=>{
        console.log(`master>> worker #${worker.id} exit = ${worker.process.pid} died(code=${code}, signal=${signal})`);
    });
    cluster.on('fork', (worker)=>{
        console.log(`master>> #${worker.id} fork()`);
    });
    cluster.on('listening', (worker, address)=>{
        console.log(`master>> worker #${worker.id} ${address.address}:${address.port}`);
    });
    cluster.on('online', (worker)=>{
        console.log(`master>> online #${worker.id}`);
    });
    cluster.on('setup', (settings)=>{
        console.log(`master>> setup: ${JSON.stringify(settings)}`);
    });
    cluster.on('disconnect', ()=>{
        console.log('master>> disconnect');
    });
    cluster.on('message', (worker, message, handle)=>{
        console.log(`master>> ${message}`);
    });
}else{
    cluster.on('exit', (code, signal)=>{
        console.log(`worker>> exit (code=${code}, signal=${signal})`);
    });
    cluster.on('listening', (address)=>{
        console.log(`worker>> ${address.address}:${address.port}`);
    });
    cluster.on('online', (worker)=>{
        console.log(`worker>>online #${worker.id}`);
    });
    cluster.on('setup', (settings)=>{
        console.log(`worker>>setup: ${JSON.stringify(settings)}`);
    });
    cluster.on('disconnect', ()=>{
        console.log('worker>>disconnect');
    });
    cluster.on('message', (worker, message, handle)=>{
        console.log(`worker>> message=${message}`);
    });
    
    http.createServer((req, res)=>{
        res.writeHead(200);
        res.end(`hello cluster, ${process.pid}`);
    }).listen(8000);
}