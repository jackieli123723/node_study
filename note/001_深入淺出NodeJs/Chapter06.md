# Buffer
* Buffer 是一種典型結合 js 和 c++ 的模組
    * 非性能相關使用 c++ 實現 
* 無須 require 就能直接使用
* 元素儲存為 0-255 的數值
    * 如果小於 0, 持續累加 256 直到值介於 0-255
    * 如果大於 255, 持續減 256 直到值介於 0-255
* new Buffer('你好', 'utf-8');
* 記憶體分配不是用 v8 的 heap, 而是 C++ 層面的配置
    * stab 分配機制
        * stab 是固定大小(8KB)已配置區塊
        * 狀態區分為 full(完全分配), partial(部分分配), empty(未分配)
        * 以 8KB 作為分界區分大物件還是小物件
        * 小物件會共用 stab 直到空間耗盡, 如果兩個連續小物件總和大於8KB, 則第一個物件的 stab 空間會浪費, 配置最好以 8K 為倍數避免 stab 浪費
        * 大物件直接配置指定大小的 stab 不共用
        
# 編碼轉換
* 支援編碼
    * ASCII
    * UTF-8
    * UTF-16LE/UCS-2
    * Base64
    * Binary
    * Hex
* Buffer.isEncoding(encoding) : 檢查編碼是否內建支援
* 支援非內建編碼
    * iconv : c++ libconv 實現
    * iconv-lite : 純 js 實現

## string to Buffer
* new Buffer(str, encoding)
* buf.write(str, offset, len, encoding)

## Buffer to string
* buf.toString(encoding, start, end)

## StringDecoder 解決編碼問題
* 支援 UTF-8, Base64, UCS-2/UTF-16LE

## Buffer 串接
* 應該先把所有 buffer 存放在 array, 最後再用 Buffer.concat 合併成完整 Buffer

## 性能
* 內部很多都使用 Buffer 進行處理與傳輸, 預先轉換成 Buffer 並重複使用可減少內部轉換時間
* fs.createReadStream 的 highWaterMark 選項用於指定每次讀取的長度
    * 影響記憶體配置
    * 影響讀取次數