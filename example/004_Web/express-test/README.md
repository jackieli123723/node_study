
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
