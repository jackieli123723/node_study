
process.on('message', (m)=>{
    console.log(`master >> ${JSON.stringify(m)}`);
});
process.send({'check': true});