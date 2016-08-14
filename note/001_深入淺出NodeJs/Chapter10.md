# 單元測試
* [example](https://github.com/cwchiu/node_study/tree/master/example/002_Lib/mocha-test)

## Library: mocha
* 測試框架
* 支援 TDD 和 BDD 測試風格

## Library: jscover, blanket
* [alex-seville/blanket: blanket.js is a simple code coverage library for javascript. Designed to be easy to install and use, for both browser and nodejs.](https://github.com/alex-seville/blanket)
* [blanket/getting_started_node.md at master ‧ alex-seville/blanket](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_node.md)
* [drop HTMLCov and JSONCov reporters · Issue #2356 · mochajs/mocha](https://github.com/mochajs/mocha/issues/2356)
* 測試覆蓋率
* 將原始程式轉換成加工後的程式再進行測試和統計

### istanbul, nyc
* [istanbul](https://www.npmjs.com/package/istanbul)
* [nyc](https://www.npmjs.com/package/nyc)

## Library: mock, muk
* 模擬測試資料

## Library: rewire
* 取得沒有 exports 的方法

## 漸進式整合
* travis-ci + github
    * 利用 git 的 hook
* travis 會使用 package.json 的 test "Scripts" 進行測試
* 取得專案狀態 http://travis-ci.org/<username>/<repo>.png?branch=<branch>
### 調整 travis 專案類型
1. 建立 .travis.yml

```
language: node_js
node_js:
  -"0.8"
  -"0.10"
```

# 性能測試

## Library: benchmark
* 基準測試
* [example](https://github.com/cwchiu/node_study/tree/master/example/002_Lib/benchmark-test)

## 壓力測試
* ab, siege, http_load
* ab 測試報告
    * Complete request: 成功的請求
    * Failed requests: 失敗的請求
    * Write errors: 寫入過程發生錯誤, 如:連線中斷
    * Request per second: 每秒處理的請求數量, 又稱 RPS 或 QPS
    * Time per request: 第一個是使用平均等待時間, 第二個是伺服器平均請求時間
        * 前者除以併發數就是後者
    * Transfer Rate: 傳輸率=傳輸大小/傳輸時間, 受限於網卡頻寬
* RPS = PV/10h
    * 每天10小時區間內網頁存取次數為 100萬次, 100,0000/10h = 100,000/(10*60*60) = 27.78 = RPS