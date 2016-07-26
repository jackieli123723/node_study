# 非同步程式設計
* 採用 co Library 對於開發輕鬆不少

# 非同步並發控制
* 每個非同步 IO 都會耗用一個 File Descriptor, 大量使用會耗完得到 "Error: EMFILE, too many open files"
* bagpipe Library: 使用 queue 存放限制非同步 IO 並發數量
