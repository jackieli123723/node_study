var addon = require('./build/Release/hello_bindings');
console.log( addon.getString() );
console.log( addon.getNumber() );
console.log( addon.getUndefined() );
console.log( addon.getNull() );
console.log( addon.getTrue() );
console.log( addon.getFalse() );

try{
    console.log( addon.raiseError() );
}catch(ex){
    console.log(ex);
}

console.log( addon.addTwo(3,4) );
console.log( addon.not(true) );
console.log( addon.pow2(1.7) );
console.log( addon.Hello() );