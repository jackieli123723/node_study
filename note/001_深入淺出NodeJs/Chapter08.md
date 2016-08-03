# 請求方法
* req.method

# 路徑解析
* url.parse()

# GET 參數
* querystring.parse()
* url.parse(url, true).query

# Cookie
* RFC 2109
* RFC 6265
* req.headers.cookie
* 選項
    * path : 作用路徑
    * Expire, Max-Age: 失效時間
    * HttpOnly : 只有 Http Request 過程會送出, 其他流程無法存取
    * Secure: true 時表示限用於 https
    
# Session
* 只存在 Server, Client 無法修改

# Form Post 資料
* x-www-form-urlencoded
    * querystring.parse(req.rawBody);
* XML
    * 可用 xml2js module
* 檔案上傳
    * 可用 formidable module
    * 限制上傳的資料長度
        * 檢查 content-length
        * 檢查實際收到的資料長度是否超過允許範圍
        
# BigPipe
* 頁面切成許多小網頁(pagelet), 先輸出沒有資料的框架, 再逐步輸出每個小網頁到前端, 最後在填充到框架中
* 持續輸出 <script></script> 內含 js 腳本, 使前端依據後續輸出的資料進行資料補回

# framework
* express
* koa
