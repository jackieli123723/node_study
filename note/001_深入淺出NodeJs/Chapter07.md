# TCP Server/Client
* [tcpserver.js](https://github.com/cwchiu/node_study/blob/master/example/006_Net/TCPServer/tcpserver.js)
* [tcpclient.js](https://github.com/cwchiu/node_study/blob/master/example/006_Net/TCPServer/tcpclient.js)

# UDP Server/Client
* [udpserver.js](https://github.com/cwchiu/node_study/blob/master/example/006_Net/UDPServer/udpserver.js)
* [udpclient.js](https://github.com/cwchiu/node_study/blob/master/example/006_Net/UDPServer/udpclient.js)

# HTTP Server
* [httpserver.js](https://github.com/cwchiu/node_study/blob/master/example/004_Web/HttpServer/httpserver.js)
* [httpclient.js](https://github.com/cwchiu/node_study/blob/master/example/004_Web/HttpServer/httpclient.js)

# HTTPS Server
* [https_server.js](https://github.com/cwchiu/node_study/blob/master/example/004_Web/HttpsServer/https_server.js)
* [https_client.js](https://github.com/cwchiu/node_study/blob/master/example/004_Web/HttpsServer/https_client.js)

# WebSocket Server
* [wsserver.js](https://github.com/cwchiu/node_study/blob/master/example/004_Web/WebSocket/wsserver.js)
* [wsclient.js](https://github.com/cwchiu/node_study/blob/master/example/004_Web/WebSocket/wsclient.js)

# http 模組
* 封裝 http 處理
* [http.Server](https://nodejs.org/api/http.html#http_class_http_server) 從 [tcp 服務](https://nodejs.org/api/net.html#net_class_net_server)繼承而來
    * 封裝從 connecton 到 request 過程
    * http 服務
    * 開啟 keepalive 後, tcp 會話可用於多次請求和回應
        * 內部預設用 http.globalAgent 處理, 如果 client 的 host+port 相同預設對多同時可以有5條連線
        * http.Agent 可取代 http.globalAgent
            * socket 屬性表示使用中的連接數
            * requests 屬性表示處於等待的請求數
        * http.request 的 agent 參數設為 false 表示不受併發數限制
    * 以 request 為單位服務
* tcp 服務以 connection 為單位進行服務
* 將連線的 socket 抽象化為 ServerRequest 和 [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

# WebSocket
* 使用基於事件的設計模型
* 與用戶間保持長連接, 與用戶間只建立單一TCP連線
* 能夠 push 資料到用戶端
* 標頭檔比 http 更少,耗用頻寬更少
* RFC 6455 
* 在 TCP 協定上定義
    * 協定 = 握手 + 資料傳輸
    * 握手在 http 上完成
* [ws module](https://www.npmjs.com/package/ws)

## 發起連線

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: xxx
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

* Sec-WebSocket-Key: 安全驗證用, 隨機產生的 base64 字串

# 網路安全
* node 提供 tls, https, crypto
* tls module 提供 TLS/SSL 加密的 TCP 連線
* https module 提供 TLS/SSL 加密的 http 服務

## TLS/SSL
* 公私鑰, 非對稱結構
    * 公鑰 : 加密資料用
        * openssl genrsa -out private.key 1024
    * 私鑰 : 解密接收資料
        * openssl rsa -in private.key -pubout  -out private.pem
* 通訊前, 要先交換"公鑰"
* 數位簽章避免中間人攻擊
    * 由受信任的伺服器核發的公私鑰
    
### 產生自我簽章的憑證
openssl genrsa -out ca.key 1024
openssl req -new -key ca.key -out ca.cer
openssl x509 -req -in ca.cer -signkey ca.key -out ca.crt

### 產生 CA 簽名的憑證

openssl genrsa -out server.key 1024
openssl req -new -key server.key -out server.csr
openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt

openssl genrsa -out client.key 1024
openssl req -new -key client.key -out client.csr
openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in client.csr -out client.crt

