# 摘要
* ES6將其寫進了語言標準
* Promise對象有且只有三種狀態
　　1. pending：異步操作未完成
　　2. resolved：異步操作已完成
　　3. rejected：異步操作失敗
* 狀態的變化只有兩種模式，並且一旦狀態改變，就不會再變
　　1. 異步操作從pending到resolved
　　2. 異步操作從pending到rejected
* 當傳入匿名函數作為構造函數Promise的參數時，我們在new的時候，匿名函數就已經執行了
* thenable 物件指有定義then方法的物件

# [Promise/A+規範](http://promises-aplus.github.io/promises-spec/)
* Promise 對象有三種狀態： Pending – Promise對象的初始狀態，等到任務的完成或者被拒絕；Fulfilled – 任務執行完成並且成功的狀態；Rejected – 任務執行完成並且失敗的狀態；
* Promise的狀態只可能從「Pending」狀態轉到「Fulfilled」狀態或者「Rejected」狀態，而且不能逆向轉換，同時「Fulfilled」狀態和「Rejected」狀態也不能相互轉換；
* Promise對象必須實現then方法，then是promise規範的核心，而且then方法也必須返回一個Promise對象，同一個Promise對象可以註冊多個then方法，並且回調的執行順序跟它們的註冊順序一致；
* then方法接受兩個回調函數，它們分別為：成功時的回調和失敗時的回調；並且它們分別在：Promise由「Pending」狀態轉換到「Fulfilled」狀態時被調用和在Promise由「Pending」狀態轉換到「Rejected」狀態時被調用。

![](http://greengerong.github.io/images/blog_img/promises-%E6%B5%81%E7%A8%8B%E5%9B%BE.png)


# Promise 方法
* Promise.all(iterable)可以等到所有promise都完成之後才運行
* Promise.race(iterable)會在多個promise間製造一種競爭關係，當其中一個完成時，其它promise則被拒絕
* Promise.resolve(value)
* Promise.reject(reason)

# 工具
* [Promisees ‧ Courtesy of ponyfoo.com](http://bevacqua.github.io/promisees/)

# [Common Promise Mistakes - DZone Web Dev](https://dzone.com/articles/common-promise-mistakes)
## Promise 定義不要使用 try...catch
* 因為 Promise 會攔截所有的 exception 並轉換成 rejected Promise

## 避免深層嵌套 Promise

```
// Bad
authenticateUser('user1').then(function(user){
    getPosts(user).then(function(posts){
        showPosts(posts).then(function(){
            console.log('done!');
        });
    });
});

// Good
authenticateUser('user1')
  .then(function(user){
      return getPosts(user);
  })
  .then(function(posts){
      return showPosts(posts);
  })
  .then(function(){
      console.log('done!');
  });
  
// Better
authenticateUser('user1')
  .then(getPosts)
  .then(showPosts)
  .then(function(){
       console.log('done!');
   });
```

## 使用 Promise.all 避免 Promise 深度嵌套

```
// Bad
getProduct('p1')
  .then(function(p1){
    getProduct('p2')
      .then(function(p2) {
        getProduct('p3')
          .then(function(p3) {
            return compare(p1, p2, p3);
          });
      });
});

// Good
Promise.all([getProduct('p1'), getProduct('p2'), getProduct('p3')])
       .then(function(products){
          return compare(products[0], products[1], products[2]);
       });
       
// Better
Promise.all([getProduct('p1'), getProduct('p2'), getProduct('p3')])
       .then(function([p1, p2, p3]){
          return compare(p1, p2, p3);
       });
```

## 忽略非必要的 Promise

```
// Before
function doSomething() {
    return new Promise(function(resolve, reject) {
        fetchData('resource1')
          .then(function(resource) {
             var data = process(resource);
             resolve(data);
          })
          .catch(function(err) {
              reject(err);
          });
    });
}

// After
function doSomething() {
    // then 本身就會返回 Promise 不用建立新的 Promise
    return fetchData('resource1')
              .then(function(resource) {
                  return process(resource);
              });
}
```

## 不要將同步程式建立 Promise, 會變慢

# 相關套件
* [promisify-node](https://www.npmjs.com/package/promisify-node)

# 參考資料
* [Promise的前世今生和妙用技巧 - 破狼](http://www.cnblogs.com/whitewolf/p/promise-best-practice.html)
* [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise迷你書（中文版）](http://liubin.org/promises-book/)
* [ECMAScript 6 promises（下）：談談 API（一）-lovenyf](http://blog.chinaunix.net/uid-26672038-id-4900198.html)
* [Promises/A+規範 - 一配的個人頁面](http://my.oschina.net/1pei/blog/543419)
* [My five promise patterns](https://remysharp.com/2014/11/19/my-five-promise-patterns)
* [JavaScript ES6 Promise —— 等待的承诺_慕课手记](http://www.imooc.com/article/3627)
* [JavaScript Promises: There and back again - HTML5 Rocks](http://www.html5rocks.com/zh/tutorials/es6/promises/)
* [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
* [ES6 Promises in Depth](https://ponyfoo.com/articles/es6-promises-in-depth)
* [Preloading Images in Parallel with Promises](https://www.sitepoint.com/preloading-images-in-parallel-with-promises/)
* [GitHub - wbinnssmith/awesome-promises: A curated list of useful resources for JavaScript Promises](https://github.com/wbinnssmith/awesome-promises?utm_source=javascriptweekly&utm_medium=email)
* [前言 · 從Promise開始的JavaScript異步生活](https://eyesofkids.gitbooks.io/javascript-start-es6-promise/content/contents/intro.html)
