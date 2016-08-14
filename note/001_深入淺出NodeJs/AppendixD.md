# 建立 NPM 倉庫
* [source code](http://github.com/isaacs/npmjs.org)
* 使用 CouchDB DB
* NPM 倉庫 = registry(儲存模組套件檔+JSON api) + www(網站)

## 步驟
1. 安裝 Erlang
2. CouchDB
3. 建立 npm 資料庫
curl -X PUT http://127.0.0.1:5984/registry

4. 抓取 npm 倉庫原始碼
git clone https://github.com/isaacs/npmjs.org.git

5. 取得安裝工具
npm install couchapp semver

6. 載入 npm 倉庫程式碼到 CouchDB
couchapp push registry/app.js http://127.0.0.1:5984/registry
couchapp push www/app.js http://127.0.0.1:5984/registry

6. 完成
http://127.0.0.1:5984/registry/_design/ui/_rewrite
http://127.0.0.1:5984/registry/_design/scratch/_rewrite

## mirror 倉庫
npm install replicate
replicate [source] [target]

## private 倉庫
* 存放特定套件在內部

npm install sync_package
sync_package [package]

