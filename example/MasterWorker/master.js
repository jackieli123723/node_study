let fork = require('child_process').fork,
    cpus = require('os').cpus();
for(let i=0, c=cpus.length; i<c; ++i){
    console.log(`Worker #${i+1}`);
    fork('./worker.js');
}
