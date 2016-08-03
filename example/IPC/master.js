let fork = require('child_process').fork;
let p2 = fork('./worker.js');
p2.on('message', (m)=>{
    console.log(`worker >> ${JSON.stringify(m)}`);
});
p2.send({'data': 'hello worker'});


