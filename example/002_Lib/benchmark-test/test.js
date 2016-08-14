const Suite = require('benchmark').Suite;
let suite = Suite();
let arr = [0,1,2,3,4,5,6];
suite
    .add('nativeMap', ()=>{
        return arr.map( (v)=>{
            return v*2;
        });
    }).add('customMap', ()=>{
        let ret = [];
        for(let i=0,c=arr.length; i<c;++i){
            ret.push(arr[i]*2);
        }
        return ret;
    }).on('cycle', (event)=>{
        console.log(String(event.target));
    }).on('complete',function(){
        console.log(`winner is ${this.filter('fastest').map('name')}`);
    }).run({ 'async': true });
    