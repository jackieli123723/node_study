# child_process.spawn()

# child_process.exec()
* 效果同作業系統 shell 命令
* 實現原理是啟動了一個系統shell來解析參數，因此可以是非常複雜的命令，包括管道和重定向。此外


# child_process.execFile()
* 與exec的區別在於不啟動獨立的shell，因此相比更加輕量級

# child_process.fork()
* 直接運行Node.js模塊
* 在父進程與子進程直接建立一個IPC管道，用於父子進程之間的通信
    
# 參考資料
* [Child Process | Node.js v6.4.0 Documentation](https://nodejs.org/api/child_process.html)
