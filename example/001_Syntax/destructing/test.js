var [a,b,c]=[1,2,3];
console.log(a); // 1

var [a2,...c2]=[1,2,3];
console.log(c2); // [2,3]

var [missing] = [];  
console.log(missing); // undefined

var {name: a} = {name:'arick',age:35};
console.log(a);
var {name} = {name:'arick',age:35};
console.log(name);

// ¹w³]­È
var [missing = true] = [];  
console.log(missing); // true 

var { message: msg = "Something went wrong" } = {};  
console.log(msg);  // "Something went wrong"  

function test({
    name: name = "a",
    age: age = 35,
    boy: boy = true
}){

    console.log(name);
    console.log(age);
    console.log(boy);
    console.log('='.repeat(10));
}

test({});
test({name: 'arick'});