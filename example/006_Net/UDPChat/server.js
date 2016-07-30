let udp = require('dgram');

class UDPChatServer {
    constructor(){
        this.server = udp.createSocket('udp4');
        /**
         * 存醋當前在線的用戶
         * @type {{online: Array, pool: Array}}
         */
        this.userPool = {
            online: [],
            pool: []
        };
        
        /**
         * 用於存儲人員之間的離線消息任務
         * @type {{tasks: Array}}
         */
        this.msgTask = {
            //config: {},
            tasks: []
        };
        
        this.tid = -1;
        
        
    }
    /**
     * 移除在線狀態
     * @param name
     */
    pullFromPool (name) {
        let index = this.userPool.online.indexOf(name);
        if (index >= 0) {
            this.userPool.online.splice(index, 1);
            this.userPool.pool.splice(index, 1);
            return;
        }
    }
    
    /**
     * 加入離線消息任務
     * @param msg
     */
    addInTask (msg) {
        this.msgTask.tasks.push({msg: msg, expireTime: 7 * 24 * 3600 + new Date().getTime()});
    }
    
    start(port=8124){
        let self = this;
        this.server.on('message', (msg, rinfo) =>{
            //注意msg為Buffer對象
            // console.log(msg.toString());
            let m = JSON.parse(msg.toString());
            self.pushIntoPool(m.from.name, rinfo);
            if (m.action == 'online') {
                console.log('當前聊天室在線人數%d::%s', 
                    self.userPool.online.length, 
                    self.userPool.online.join(","));
                return;
            }
            //發送消息
            self.sendMsg(m, rinfo);
        }).bind(port, function () {
            console.log('服務端啟動成功');
            //當服務啟動後,開啟後台消息輪詢服務
            /**
             * 後台輪詢任務
             */
            self.tid = setInterval( () => {
                let m;
                for (let i = 0, c=self.msgTask.tasks.length; i < c; ++i) {
                    m = self.msgTask.tasks.splice(i, 1)[0];
                    self.sendMsg(m.msg);
                }
            }, 1000);
        });
                
        
    }
    
    /**
     * 加入某個用戶的在線狀態
     * @param name
     * @param rinfo
     */
    pushIntoPool (name, rinfo) {
        let index = this.userPool.online.indexOf(name);
        if (index >= 0) {
            this.userPool.online.splice(index, 1);
            this.userPool.pool.splice(index, 1);
        }
        this.userPool.online.push(name);
        this.userPool.pool.push({
            name: name, 
            ip: rinfo.address, 
            port: rinfo.port
        });
    }
        
    _send(msg, to, callback){
        this.server.send(
            msg, 
            0, 
            Buffer.byteLength(msg, 'utf8'), 
            to.port, 
            to.ip, 
            callback);
    }
    /**
     * 發送消息
     * @param m
     * @param rinfo
     */
    sendMsg (m, rinfo) {
        let self = this;
        process.nextTick(function () {
            let userPool = self.userPool;
            if (m.to){
                //獲取對方的服務地址\端口
                let index = userPool.online.indexOf(m.to.name);
                if (index >= 0) {
                    //在線
                    let config = userPool.pool[index];
                    let msg = JSON.stringify(m);
                    self._send(msg, config, (err, bytes) => {
                        if (err) {
                            //發送失敗
                            //緩存數據
                            self.addInTask(m);
                        }
                    });
                } else {
                    if (rinfo) {
                        //離線
                        let content = JSON.stringify({content: m.to.name + '不在線'});
                        self._send(
                            content, rinfo, (err, bytes) => {
                                if (err) {
                                    //發送失敗
                                }
                            });
                    }
                    //不在線
                    self.pullFromPool(m.to.name);
                    //緩存數據
                    self.addInTask(m);
                }

            } else {
                //群聊
                console.log('here');
                for (let i = 0, c=userPool.pool.length; i < c; i++) {
                    let to_cfg = userPool.pool[i];
                    console.log(to_cfg);
                    if (to_cfg.name == m.from.name) {
                        continue;
                    } else {
                        let msg = JSON.stringify(m);
                        console.log(['send', msg]);
                        self._send(msg, to_cfg, (err, bytes) => {
                                if (err) {
                                    //發送失敗
                                }
                            });
                    }
                }
            }
        });
    };
}

let server = new UDPChatServer();
server.start();





