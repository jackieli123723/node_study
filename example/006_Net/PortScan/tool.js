/**
 * Port Scanning
 *
 * @author Chui-Wen Chiu
 */
let net = require('net'),
    util = require('util'),
    host = '10.62.8.119',
    port = 1,
    count = 0,
    run_max = 500,
    valid_port = [],
    PORT_MAX = 65535;

if(process.argv[2]){
    // TODO: host 檢查    
    host = process.argv[2];
}

if(process.argv[3]){
    run_max = process.argv[3];
    PORT_MAX = Math.max(run_max, PORT_MAX);
}

String.prototype.repeat = function( num ){
    return new Array( num + 1 ).join( this );
};


function job(){
    var clip = util.format("%d%%(%d/%d/%d)", parseInt(port/PORT_MAX)*100, port, PORT_MAX, valid_port.length);
    var len = clip.length;
    process.stdout.write("\b".repeat(len));
    process.stdout.write(clip);      
    
    if(port >= PORT_MAX){        
        return;
    }
    
    
    if(count<run_max){
        ++count;
        ++port;                   
        var sck = new net.Socket({
            type: 'tcp4'
        });        
        sck.connect(port, host);
        sck.on('connect', function(){
            //console.log(sck.remotePort +' connected');
            valid_port.push(sck.remotePort);
            sck.destroy();        
        });
        sck.on('error', function(){        
            //console.log(port + ' error');
        });

        sck.on('close', function(){
            --count;
            //pr('close');
            process.nextTick(job);
        });
    }
}

process.on('exit', function(){
    console.log('');
    console.log('Port List:');
    valid_port.sort();
    for(var i=0,c=valid_port.length;i<c;++i){
        console.log( valid_port[i] );
    }
});

console.log('Start Scanning... ' + host);
for(var i =1; i<run_max; ++i){
    process.nextTick(job);
} 