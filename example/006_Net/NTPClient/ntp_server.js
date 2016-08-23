const net = require('net'),
      dgram = require('dgram');
      
class NTPServer {
    constructor(){
        this.tcp = net.createServer( client => {
            client.end( this.now);
        });
        this.tcp.listen(13);
        
        this.udp = dgram.createSocket('udp4', (msg, rinfo)=>{
            let ts = this.now;
            this.udp.send(ts, 0, ts.length, rinfo.port, rinfo.address);
        });
        
        this.udp.bind(13);
    }
    get now(){
        return new Buffer(new Date().toUTCString() + "\r\n");
    }
}

module.exports.NTPServer = NTPServer;