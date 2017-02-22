
// v7.6+
function newPromise(s){
    return new Promise((y,n)=>{
        console.log(`Promise: ${s}`);
        setTimeout( ()=>{
            y(s);
        }, s);
    });
}

async function sleep3(){
    let v = await newPromise(3000);
    console.log(v);
    let v2 = await newPromise(1000);
    console.log(v2);
}

sleep3(3);
console.log('#1');