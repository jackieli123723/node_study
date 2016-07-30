let udp = require('dgram');
class FMsg{

    constructor(from, port, host) {
        this.from = from;
        this.to = null;
        this.content = null;
        this.action = 'online';
        this.host = host;
        this.port = port;
    }
    
    set Action(action) {
        this.action = action;
    }
    
    set Content(content) {
        this.content = content;
    }
    
    set To(v){
        this.to = v;
    }
    
    getMsg () {
        let msg = {
            from: this.from,
            to: this.to,
            content: this.content,
            action:this.action
        };
        return JSON.stringify(msg);
    }
    
    udpSendMsg (client, callback) {
        let data = this.getMsg();
        // console.log(data);
        client.send(
            data, 
            0, 
            Buffer.byteLength(data,'utf8'), 
            this.port, 
            this.host, 
            callback
        );
    }
}

class UDPChatClient {
    constructor(name, port=8124, host='127.0.0.1'){
        this.client=udp.createSocket('udp4');
        this.name = name;
        this.port = port;
        this.host = host;
        this.msg=new FMsg({
            name:name,
            host:this.client.address,
            port:this.client.remotePort,
            content:''
        }, port, host);
        
        this.client.on('message',(datas)=>{
            let data=JSON.parse(datas.toString());
            if(!data.from){
                console.log(data.content);
            }else{
                if(!data.to){
                    console.log(`[${data.from.name}]:${data.content}`);
                }else{
                    console.log(`[${data.from.name}@${data.to.name}]:${data.content}`);
                }
            }
        });
        //默認連接後上線操作
        let self = this;
        this.msg.udpSendMsg(this.client,(err,bytes)=>{
            if(err==0){
                console.log(`${self.name}上線!`);
            }
        });
        
        process.stdin.resume();
        process.stdin.on('data',(data)=>{
            self.msg.Action = 'chat';
            self.msg.Content = data.toString('utf8');
            //不設置發送給誰，默認發送給所有人
            self.msg.udpSendMsg(self.client,(err,bytes)=>{
                if(err){
                    //發送失敗
                }
            });

        });
    }
}

exports.UDPChatClient = UDPChatClient;