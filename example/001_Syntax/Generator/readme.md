* Generator 以 function* 開頭
* 在生成器函數中，yield是一個關鍵字，如同return。yield可以多次使用，作用是中斷生成器，
* 生成器函數最大的特點是可以中斷自己，但普通函數不可以
* 每當生成器執行yield操作時，它的堆棧幀包括本地變量、參數、臨時值等都會從堆中被移出。但是生成器對象會保留（拷貝）對該幀的引用，所以.next()可以重新激活它然後繼續執行
* 生成器不是線程。當一個生成器執行時，它與其調用者都處於同一個線程，是按"次序"執行而不是並行運行。
* 生成器就是迭代器
* 透過生成器迭代特性，可以產生無限的序列
* 當編寫一個複雜的循環時，可以提出產生數據的部分，把它改寫為一個獨立的生成器函數
* 迭代器接口支持一個可選的.return()方法，每當迭代在迭代器返回{done:true}之前退出都會自動調用這個方法
* .return()會觸發生成器執行任一finally代碼塊然後退出，就好像當前的生成暫停點已經被秘密轉換為一條return語句一樣。
* .return()方法並不是在所有的上下文中都會被自動調用，只有當使用了迭代協議的情況下才會觸發該機制。所以也有可能生成器沒執行finally代碼塊就直接被垃圾回收了。
* 當有錯誤產生時，不要繼續調用generator.next(result)方法，而應該調用generator.throw(error)方法來拋出yield表達式，進而像.return()方法一樣終止生成器的執行。但是如果當前的生成暫停點在一個try代碼塊中，那麼會catch到錯誤並執行finally代碼塊，生成器就恢復執行了。
* 生成器內部拋出的異常總是會傳播到調用者。所以無論生成器是否捕獲錯誤，generator.throw(error)都會拋出error並立即返回給你。
* 當生成器執行到一個yield表達式並暫停後可以實現以下功能：
    * 調用generator.next(value)，生成器從離開的地方恢復執行。
    * 調用generator.return()，傳遞一個可選值，生成器只執行finally代碼塊並不再恢復執行。
    * 調用generator.throw(error)，生成器表現得像是yield表達式調用一個函數並拋出錯誤。
    * 或者，什麼也不做，生成器永遠保持凍結狀態。（是的，對於一個生成器來說，很可能執行到一個try代碼塊，永不執行finally代碼塊。這種狀態下的生成器可以被垃圾收集器回收。）
* 普通yield表達式只生成一個值，而yield*表達式可以通過迭代器進行迭代生成所有的值。
*  yield語句不能用在普通函數中，否則會報錯
* next([arg] ) 可以帶一個參數，該參數就會被當做"上一個" yield語句的返回值
    * 第一次使用next方法時，不能帶有參數，V8會直接忽略第一次使用next方法時的參數，只有從第二次使用next方法開始，參數才是有效的
* yield 返回單值, yield* 返回可迭代物件

# Ref 
* [【探秘ES6】系列專欄（三）：生成器 ](http://my.oschina.net/1pei/blog/522488)
* [ES6 Generators and asynchronous javascript](https://alexperry.io/javascript/2015/09/17/es6-generators-and-asynchronous-javascript.html?utm_source=javascriptweekly&utm_medium=email)
* [function* - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function%2a)
* [Asynchronous I/O with Generators & Promises](https://ponyfoo.com/articles/asynchronous-i-o-with-generators-and-promises?utm_source=javascriptweekly&utm_medium=email)
* [異步編程之Generator(1)——領略魅力 - Yika丶J - 博客園](http://www.cnblogs.com/YikaJ/p/4481615.html)
* [深入解析js異步編程利器Generator - 大額_skylar - 博客園](http://www.cnblogs.com/skylar/p/es6-generator-koa-co-nodejs-js.html)
#
