/*
回應服務 (Echo)

網路埠號
Port 7
主要特性
用戶端透過 Socket 傳送任何字串到該服務，該服務會立刻回應與用戶端輸入字串一模一樣的內容到用戶端
斷線時機
用戶端主動發出斷線要求
適用情境
可用來測試網路是否正常連線，也可用來監控網路是否斷線。
開發 Socket 應用程式時，可用來測試用戶端與伺服器端彼此互動的情況
*/
var net = require('net'); 
net.createServer(function(socket) { 
    socket.on('data', function(buffer) { 
        socket.write(buffer);
    });
    
}).listen(7);


console.log('echo starting');