var obj = {"a":1};
let mySymbol = Symbol();
obj[mySymbol] = "ok!";
console.log(mySymbol.toString() + '=>' + obj[mySymbol]);
console.log(Object.getOwnPropertySymbols(obj)); // 只有 symbol
console.log(Object.getOwnPropertyNames(obj)); // 不會有 symbol

// 不會有 symbol
for(var k in obj){
    console.log(k);
}

console.log(Reflect.ownKeys(obj)); // 含 Symbol