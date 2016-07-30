/*
丟棄服務 (Discard)

網路埠號
Port 9
主要特性
用戶端透過 Socket 傳送任何字串到該服務，該服務會立刻丟棄所接收到的任何字串
適用情境
可用來測試網路用戶端是否能夠正常透過 Socket 傳送資料
你可以從用戶端大量的傳送資料，直到用戶端主動斷線為止
開發 Socket 應用程式時，可用來測試用戶端到伺服器端之間的「上傳」頻寬大小
斷線時機
用戶端主動發出斷線要求
*/
var net = require('net');

net.createServer().listen(9);

console.log('Discard starting');