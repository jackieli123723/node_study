# 中間件middleware
* 一種特殊的函數，它可以訪問一個http請求週期中的request對象、response對象，以及表示調用棧中的下一個中間件函數的引用
* 如果當前中間件函數沒有結束HTTP請求，則必須調用 next() 將執行傳遞給下一個中間件函數，否則請求會掛起
* 使用 app.use() 加載中間件函數，中間件函數加載的順序決定了它的執行順序，即先加載，先執行

function (req, res, next) {
    next();
}

## app級中間件  vs router級中間件
* app級中間件，即將中間件函數綁定到 app 對象
    * 通過 app.use() 或者 app.METHOD() 方法
* router級中間件綁定到express.Router() 對象
    * 通過 router.use() 或者 router.METHOD() 方法
    
# class : Request
* req.get() : 取 header
* req.body : 取 post body, 需要借助第三方module，如 body-parser 和 multer 
* req.query : 取查詢參數
* req.params : 取路徑參數

# class :Response
* res.status() : 設置狀態碼
* res.json() : 返回 json 
* res.send() : 發送HTTP響應信息，參數可以是字符串、數組、Buffer對象等，會根據參數的類型自動設置header的 Content-Type 
* res.set() : 設置HTTP的header信息
* res.render() : 使用模板引擎渲染頁面

# 靜態檔案處理
* [Serving static files in Express](http://expressjs.com/en/starter/static-files.html)

# 回應 json
* [node.js - Proper way to return JSON using node or Express - Stack Overflow](http://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express)

# http post
* [javascript - How to retrieve POST query parameters in Express - Stack Overflow](http://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters-in-express)

# 處理檔案上傳
* [使用express 4的實現文件上傳 - 都市煙火 - 博客園](http://www.cnblogs.com/duhuo/p/4779408.html)

# Session
* [express4.x 之session使用 - 簡書](http://www.jianshu.com/p/feed054f39c9)

# TLS
* [Adding HTTPS (SSL) to Express 4.X Applications - Ayan Ray](http://blog.ayanray.com/2015/06/adding-https-ssl-to-express-4-x-applications/)
* [express4_SSL_example/app.js at master · ayanray/express4_SSL_example · GitHub](https://github.com/ayanray/express4_SSL_example/blob/master/app.js)

## 產生證書
openssl genrsa 1024 > config\private.key
openssl req -new -key config\private.key -out config\cert.csr
openssl x509 -req -in config\cert.csr -signkey config\private.key -out config\certificate.pem

# 關閉服務
* [Node.js Hints, Graceful server shutdown with Node.js and Express](http://glynnbird.tumblr.com/post/54739664725/graceful-server-shutdown-with-nodejs-and-express)
* [How do I programmatically shut down an instance of ExpressJS for testing? - Stack Overflow](http://stackoverflow.com/questions/8659011/how-do-i-programmatically-shut-down-an-instance-of-expressjs-for-testing)

# 參考資料
* [Express 4.x - API Reference](http://expressjs.com/en/api.html)
* [理解Express的middleware](http://my.oschina.net/qiaotoubao/blog/735675)
