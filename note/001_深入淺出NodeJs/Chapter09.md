# 多處理程序架構
* node 是單執行緒, 要善用 CPU 資源需啟用 multi-process
* child_process module 和 process.fork() 可建立新的 process
* child_process 提供
    * spawn() : 啟動 process
    * exec() : 類似 spawn(), 多了 callback, 用於執行命令
    * execFile() : 用於呼叫可執行檔
    * fork(): 類似 spawn, 用於.js
* [master-worker](https://github.com/cwchiu/node_study/tree/master/example/MasterWorker)
* 每個 fork 出的 process 都是獨立的 v8 執行環境

## child_process
![差異比較](http://i.imgur.com/IsoFj26.png)

```
let cp = require('child_process');
cp.spawn('node', ['worker.js']);
cp.exec('node worker.js',( err, stdout, stderr)=>{
    
});
cp.execFile('worker.js',( err, stdout, stderr)=>{
    
});
cp.fork('./worker.js');
```

## IPC(Inter-Process Communication)
* [IPC example](https://github.com/cwchiu/node_study/tree/master/example/IPC)

![](http://i.imgur.com/Odc42VW.png)

* child.send( message, [sendhandle])
    * sendhandle: 資源參照, 如:socket
    * 書中模擬 cluster 方式無法運作(node 6.3.1)
* process event
    * message: 接收 send() 的訊息
    * error: 發生錯誤
    * exit : 正常退出時, 第一個參數是退出碼, 第二個參數是null. kill() 則第2個參數處理程序的訊號
    * close: 當子程序的標準輸出入串流中止時觸發該事件, 參數與 exit 同
    * disconnect: 父或子程序呼叫 disconnect() 時觸發, 會關閉 IPC 通道
    * 系統訊號: 如: SIGTERM, SIGKILL, ...
* process method
    * send() 發送訊息
    * kill() 發送系統訊號
    
# cluster 模組
* .schedulingPolicy 
    = cluster.SCHED_RR : 啟動 Round-Robin 負載均衡策略, 環境變數 NODE_CLUSTER_SCHED_POLICY=rr
    = cluster.SCHED_NONE : 不啟動 Round-Robin 負載均衡策略, 環境變數 NODE_CLUSTER_SCHED_POLICY=none
    
* [Cluster Example](https://github.com/cwchiu/node_study/tree/master/example/004_Web/ClusterServer)
