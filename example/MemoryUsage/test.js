let os = require('os');
let global_alloc = [];
function array_alloc(){
    // memory leak
    global_alloc.push( new Array( 20*1024*1024));
}
    
function buffer_alloc(){
    // 可迴避 v8 的記憶體限制
    // 使用 heap 外的記憶體
    global_alloc.push( new Buffer(20*1024*1024) );
}
    
function main(){
    // setInterval(array_alloc, 1000);
    setInterval(buffer_alloc, 1000);
    
    setInterval(()=>{
        let mem = process.memoryUsage();
        let format = (v)=>{
            return (v/1024/1024).toFixed(2);
        };
        
        console.log(`RAM=${format(os.freemem())}/${format(os.totalmem())},heapTotal=${format(mem.heapTotal)}MB, heapUsed=${format(mem.heapUsed)}MB, rss=${format(mem.rss)}MB`);
    }, 1000);
}
    
main();