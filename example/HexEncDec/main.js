// https://cnodejs.org/topic/4f434d1dc643fe22100f33ad

let buf = Buffer.alloc(10);
for(let i =0;i<10;++i){
    buf.writeInt8(i, i);
}
console.log(buf);

let hex_str = buf.toString('hex');
console.log(hex_str);

let buf2 = new Buffer( hex_str, 'hex' );
for(let i =0;i<10;++i){
    console.log(buf.readInt8(i) == i);
}