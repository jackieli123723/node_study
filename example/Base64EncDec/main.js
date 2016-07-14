// https://cnodejs.org/topic/4f434d1dc643fe22100f33ad

// base64 encode
let data = 'key1=value1&key2=value2';
let a = new Buffer(data).toString('base64');
console.log(a);
console.log(a === 'a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTI=');
// base64 decode
let b = new Buffer(a, 'base64').toString();
console.log(b);
console.log(b === data);
