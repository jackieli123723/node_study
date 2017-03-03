var obj = {"a":1};
let mySymbol = Symbol();
obj[mySymbol] = "ok!";
console.log(mySymbol.toString() + '=>' + obj[mySymbol]);
console.log(Object.getOwnPropertySymbols(obj)); // �u�� symbol
console.log(Object.getOwnPropertyNames(obj)); // ���|�� symbol

// ���|�� symbol
for(var k in obj){
    console.log(k);
}

console.log(Reflect.ownKeys(obj)); // �t Symbol