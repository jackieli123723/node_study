# v8的記憶體限制
* 64位元 1.4GB, 32位元 0.7GB
    * 可用 --max-old-space-size 或 --max-new-space-size 調整限制
    * 原始限制的原因是限制執行 GC 時間
* 查看記憶體用量 process.memoryUsage()

# v8 GC
* 記憶分帶依據物件存活時間區分, 進行更有效的管理
    * 新生代 : 存活時間短
    * 舊生代 : 存活較長或常駐型
* 查看 gc log, --trace-gc
* 性能分析資料, --prof
    * node Source Code 的 deps/v8/tools
        * linux-tick-processor v8.log
        * windows-tick-processor.bat v8.log
            * https://github.com/ngryman/v8-windows-tickprocessor
            
# 有效的使用記憶體
* 變數離開 scope 會自動釋放
* 變數 assign 成 null 或 undefined 也可釋放
    * 不建議使用 delete 變數
    
# 記憶體指標
* process.memoryUsage()
* os.totalmem() - 系統總記憶體
* os.freemem() - 系統閒置記憶體


# 記憶體洩漏
1. 快取
    * 物件常駐在記憶體, 變成舊生代
    * 建議移到外部程式如 redis/memcached
        * GC 更有效率
        * Process 可共用資料
2. 佇列中的資料無法即時釋放
    * 服務處理時間過長大於消耗速度, 導致等待服務的請求無限增長
        * 限制佇列最大長度
        * 限制服務最大執行時間
        * 解決無法效率低下的原因
3. 未釋放的作用域

## 工具
* v8-profiler
* node-heapdump
* node-mtrace
* dtrace
* node-nenwatch