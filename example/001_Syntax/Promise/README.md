# 摘要
* ES6將其寫進了語言標準
* Promise對象有且只有三種狀態：
　　1、 pending：異步操作未完成。
　　2、 resolved：異步操作已完成。
　　3、 rejected：異步操作失敗
* 狀態的變化只有兩種模式，並且一旦狀態改變，就不會再變：
　　1、異步操作從pending到resolved；
　　2、異步操作從pending到rejected；
* 當傳入匿名函數作為構造函數Promise的參數時，我們在new的時候，匿名函數就已經執行了
* Promise.all(iterable)
* Promise.race(iterable)
* Promise.reject(reason)
* Promise.resolve(value)

# [Promise/A+規範](http://promises-aplus.github.io/promises-spec/)
* Promise 對象有三種狀態： Pending – Promise對象的初始狀態，等到任務的完成或者被拒絕；Fulfilled – 任務執行完成並且成功的狀態；Rejected – 任務執行完成並且失敗的狀態；
* Promise的狀態只可能從「Pending」狀態轉到「Fulfilled」狀態或者「Rejected」狀態，而且不能逆向轉換，同時「Fulfilled」狀態和「Rejected」狀態也不能相互轉換；
* Promise對象必須實現then方法，then是promise規範的核心，而且then方法也必須返回一個Promise對象，同一個Promise對象可以註冊多個then方法，並且回調的執行順序跟它們的註冊順序一致；
* then方法接受兩個回調函數，它們分別為：成功時的回調和失敗時的回調；並且它們分別在：Promise由「Pending」狀態轉換到「Fulfilled」狀態時被調用和在Promise由「Pending」狀態轉換到「Rejected」狀態時被調用。

![](http://greengerong.github.io/images/blog_img/promises-%E6%B5%81%E7%A8%8B%E5%9B%BE.png)


# Promise 方法
* promise.all()可以等到所有promise都完成之後才運行
* promise.race()會在多個promise間製造一種競爭關係，當其中一個完成時，其它promise則被拒絕

# 工具
* [Promisees ‧ Courtesy of ponyfoo.com](http://bevacqua.github.io/promisees/)

# 參考資料
* [Promise的前世今生和妙用技巧 - 破狼 - 博客園](http://www.cnblogs.com/whitewolf/p/promise-best-practice.html)
* [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise迷你書（中文版）](http://liubin.org/promises-book/)
* [ECMAScript 6 Promises（下）：談談 API（一） - 一配的個人頁面 - 開源中國社區](http://my.oschina.net/1pei/blog/538090)
* [Promises/A+規範 - 一配的個人頁面 - 開源中國社區](http://my.oschina.net/1pei/blog/543419)
* [My five promise patterns](https://remysharp.com/2014/11/19/my-five-promise-patterns)
* [JavaScript ES6 中的Promise - sunshinewyf的個人頁面 - 開源中國社區](http://my.oschina.net/sunshinewyf/blog/649557?fromerr=hlSRSyMt)
* [JavaScript Promises: There and back again - HTML5 Rocks](http://www.html5rocks.com/zh/tutorials/es6/promises/)
* [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
* [ES6 Promises in Depth](https://ponyfoo.com/articles/es6-promises-in-depth)
* [Preloading Images in Parallel with Promises](https://www.sitepoint.com/preloading-images-in-parallel-with-promises/)
* [GitHub - wbinnssmith/awesome-promises: A curated list of useful resources for JavaScript Promises](https://github.com/wbinnssmith/awesome-promises?utm_source=javascriptweekly&utm_medium=email)
