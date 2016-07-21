/*
日期時間服務 (Daytime)

網路埠號
Port 13
主要特性
用戶端透過 Socket 建立連線到該服務，該服務會立刻回應伺服器上的目前時間，回應完畢後立即斷線
適用情境
可用來取得伺服器上目前的日期時間
開發 Socket 應用程式時，可用來取得伺服器時間，或測試伺服器端主動發出斷線的狀況
斷線時機
伺服器端主動發出斷線要求
測試方法
透過 telnet 工具程式連上本機的 Port 13
當看見伺服器回應的日期時間字串後會立即斷線 
*/
var net = require('net'); 
net.createServer(function(socket) { 
    socket.end( (new Date()).toString());
}).listen(13);


console.log('DayTime starting');