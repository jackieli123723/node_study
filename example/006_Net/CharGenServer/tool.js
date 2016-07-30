/*
字元產生器 (CHARGEN) (Character Generator)

網路埠號
Port 19
主要特性
用戶端透過 Socket 建立連線到該服務，該服務會立刻回應永無止境的 ASCII 字元，直到用戶端主動發出斷線請求
適用情境
開發 Socket 應用程式時，可用來測試用戶端到伺服器端之間的「下載」頻寬大小，以及利用 Buffer 儲存大量文字的情境
斷線時機
用戶端主動發出斷線要求

http://www.faqs.org/rfcs/rfc864.html
 */
let net = require('net'),
    child_process = require('child_process'),
    cluster = require('cluster');
    
if(cluster.isMaster){    
    for(var i=0;i<=5; ++i){
        cluster.fork();
    }
    console.log('CharGen starting');
}else{
    net.createServer(function(socket) {         
        var c = 33;
        setInterval(function(){
            socket.write( String.fromCharCode(c) );
            ++c;
            if(c>126){
                c=33;
            }
        },0);
        
    }).listen(19);
}
