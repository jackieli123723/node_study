const msgpack = require('msgpack');
let data = msgpack.pack({
    'name': 'Arick',
    'level': 99
});
let data2 = msgpack.unpack(data);
console.log(data2);