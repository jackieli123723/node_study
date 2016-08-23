
console.log(`Child: ${process.pid}`);
process.on('message', msg=>{
    console.log(`recv from parent: ${msg}`);
    process.send(`pid=${process.pid}, echo ${msg}`); 
});
process.send({'check': true, pid: process.pid});