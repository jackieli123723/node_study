# 內建 Debugger
1. 程式中使用 debugger; 指令設置中斷點
2. 使用 node debug [.js] 執行進入除錯互動模式
3. 除錯指令
    * c : 繼續執行
    * n : 執行到下一個中斷點
    * s : 進入函數內部
    * o : 跳出函數
    * pause : 暫停
    * setBreakpoint() : 設定中斷點 
    * bt : 列出堆疊
    * list(5) : 列出上下個5行程式
    * watch()/unwatch() : 監看運算式
    * watchers : 列出所有監看
    * repl : 開啟偵錯互動模式

## Attach 已執行程式進入偵錯
1. kill -s USR1 [pid]
2. 瀏覽器開啟指定的網址

# node-inspector
* 適用於程式進入偵錯模式

# 補充
* 偵錯會讓程式處於暫停狀態