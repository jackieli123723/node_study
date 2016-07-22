# 模組
* 每個模組具有獨立空間, 彼此互不干擾
* 相同模組 require 兩次都會採用快取優先
* 分類
    * 核心模組 
        * node 預先編譯的模組
        * 路徑搜尋優先最高, 載入速度最快
    * 檔案用戶模組
        * 執行時動態載入
        * 需要完整路徑分析, 載入速度比核心模組慢

## 模組定義

// math.js
exports.add = function(a,b){
    return a+b;
};

// program.js
var math = require('math');
math.add(3,4);

## 路徑分析和檔案定位
* require.extensions : require 副檔名支援方式
* 分類
    * 核心模組
        * 速度僅次於快取
    * 自訂模組
        * 不可與核心模組名稱相同
        * 速度最慢, 依據搜尋規則尋找
        * 從 module.paths 順序尋找
            1. 目前目錄的 node_modules
            2. 父目錄的 node_modules
            3. 逐一往上搜尋 node_modules 直到根目錄
        * 副檔名偵測順序
            1. .js : 檔案讀取後編譯執行
            2. .node : dlopen() 載入
            3. .json : 檔案讀取後 JSON.parse() 解飢
            4. 其他 : 當作 .js 處理
        * 目錄名稱吻合且目錄包含 package.json 再依據 main 定位入口 js, 如錯誤將以 index 作為預設值進行分析
    * 檔案模組
        * . 和 .. 開頭的相對路徑檔案模組
        * 以 / 開頭的絕對路徑檔案模組

## Javascript 模組編譯

1. .js 原始碼被加了一層外殼

(function(exports, require, module, __filename, __dirname){
    // 原始 .js 內容
});

2. vm.runInThisContext() 取得 Function 物件

3. 將目前模組物件的 exports 屬性, require() 方法, module (模組物件本身) 和檔案最終定位的檔案與目錄名稱作為參數傳給 Function 物件執行

## C/C++ 原生模組
* 使用 node-gyp
* package.json 可在 "scripts" 定義對應的 hook
    * preinstall : npm install 時觸發
    * install : npm install 時觸發
    * unstall : npm uninstall 時觸發
    * test : npm test 時觸發
    
## 符合 CommonJS 的目錄結構
* - package.json, 可用 express 專案做為參考
* /bin 二進位檔案目錄
* /lib js 檔案目錄
* /doc 文件目錄
* /test 單元測試程式碼

## npm

### 本地安裝
npm install <tarball file>

npm install <tarball url>

npm install <folder>

### 非官方 registry 安裝

npm install expres --registry=http://registry.url

or

npm config set registry http://registry.url

## 相容多種規範的模組寫法
;(function(name, definition){
    // check AMD or CMD
    var hasDefine = typeof define == 'function',
        // check node
        hasExports = typeof module != 'undefined' && module.exports;
        
    if(hasDefine){
        // AMD pr CMD
        define( definition );
    }else if(hasExports){
        // node
        modules.exports = definition();
    }else{
        // 瀏覽器用
        this[name] = definition();
    }
})('hello', function(){
    // 功能實作
    var hello = function(){};
    return hello;
});