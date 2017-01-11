
# LINE Notify
* 第三方服務提供商可以利用 LINE Notify 套件開發通知型的應用，讓外部網站的服務和應用能透過 LINE Notify 官方帳號傳送純文字、貼圖或圖片式的服務通知給用戶，例如天氣預報、貨到超商請取貨、匯款成功、交易完成等。LINE Notify 就像一般的聊天機器人一樣可以加入一對一的對話視窗中，也能加入群組中。
* 可以把它想成一個共用的Bot
* 一樣可以發訊息給你的用戶，跟你的用戶互動，你只要能夠Access這個Line Notify Bot
* [LINE Notify 開發文件](https://notify-bot.line.me/doc/en/)
* [.NET Walker: 關於LineBot(6) - 不用申請Bot也能發訊息的Line Notify](http://studyhost.blogspot.tw/2016/12/linebot6-botline-notify.html)
* 可用 localhost 實驗, 不需要 https
* callback 需要取得 GET 的 code 參數, 此為用戶的 access token
* [iInfo 資訊交流: LINE Notify 入門到進階應用(1) --- 訊息傳送環境設定](http://white5168.blogspot.tw/2016/12/line-notify-1.html)

## 服務申請
1. https://notify-bot.line.me/zh_TW/, 最下方"登錄服務"
2. 準備服務名稱,圖片, callback url
3. 取得授權程式碼, 調整 ClientID 和 Callback URL

## 流程
1. 用戶重導向 https://notify-bot.line.me/oauth/authorize?scope=notify&response_type=code&client_id={0}&redirect_uri={1}&state={2}
    * state: 可用來識別用戶的token, 會同步傳給 callback 可用於關聯 token
    
2. 登入成功
3. callback url 取得 code
4. code 換得用戶的 access token
    * post https://notify-bot.line.me/oauth/token
    * 取得 access token
