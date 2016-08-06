# 簡報資訊
* [Vuediner #2 - Ping Pong ! Vuex + Laravel by 鄭宇翔 - YouTube](https://www.youtube.com/watch?v=C1aLFTs6QM8&feature=youtu.be)
* [Vuediner#2 - Google 簡報](https://docs.google.com/presentation/d/12pVWAHKlXiKHXs4A_D88ZsVtuV9dFHPIv9WZf2OxSlk/pub?start=false&loop=false&delayms=3000&slide=id.g15e4e075fc_0_0)
* [vuex/examples at master ‧ vuejs/vuex](https://github.com/vuejs/vuex/tree/master/examples)

# Vuex
* 集中狀態管理
    * 單一物件包含全部狀態
* 單向資料流
* Getter 
    * 從 state 取值
    * 純函數不可有 this
    * 內部原理同 computed properties
    * 
* Mutation 
    * 事件驅動改變 state
    * 所有改變 store.state 都必須透過 Mutation
    * 本質為事件系統, 每個 mutation 都必須包含 name 和 handle
    * name 命名慣例為全大寫
    * handle 第一個參數是 store.state 
    * 必須是同步函數
    * 需透過 store.dispatch() 觸發, 不該直接呼叫
    * 當新增不存在 property 時, 需用 Vue.set() 新增
    * 可用物件風格來傳遞參數
    * 可使用 slient 來隱藏變化避免追蹤, 僅限特殊情況用

* Action 封裝行為讓 Component 使用並驅動 Mutation
    * 觸發 Mutation 
    * 第一個參數為 Store
    * 可以非同步呼叫
![運作流程](http://i.imgur.com/dsCQUO8.png)

# 搭配 vux + devtool
* https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

# 快速入門
vue init webpack-simple
npm install && npm install -S vuex
npm run dev

* [Counter Example](https://github.com/cwchiu/node_study/tree/master/Vue/HelloVuex)

