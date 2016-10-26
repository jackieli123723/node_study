* [Converting ES6 Maps to and from JSON](http://www.2ality.com/2015/08/es6-map-json.html)
* https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth


## Map/WeakMap
* [深入淺出ES6（十）：集合](http://www.linuxeden.com/html/news/20150919/162916.html)
* https://github.com/WebReflection/es6-collections

### Map
* 由若干鍵值對組成

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

#### 方法
new Map：返回一個新的、空的Map。
new Map(pairs)：根據所含元素形如[key, value]的數組pairs來創建一個新的Map。這裡提供的pairs可以是一個已有的Map 對象，可以是一個由二元數組組成的數組，也可以是逐個生成二元數組的一個生成器，等等。
map.size：返回Map中項目的個數。
map.has(key)：測試一個鍵名是否存在，類似key in obj。
map.get(key)：返回一個鍵名對應的值，若鍵名不存在則返回undefined，類似obj[key]。
map.set(key, value)：添加一對新的鍵值對，如果鍵名已存在就覆蓋。
map.delete(key)：按鍵名刪除一項，類似delete obj[key]。
map.clear()：清空Map。
map[Symbol.iterator]()：返回遍歷所有項的迭代器，每項用一個鍵和值組成的二元數組表示。
map.forEach(f) 類似for (let [key, value] of map) { f(value, key, map); }。這裡詭異的參數順序，和Set中一樣，是對應著Array.prototype.forEach()。
map.keys()：返回遍歷所有鍵的迭代器。
map.values()：返回遍歷所有值的迭代器。
map.entries()：返回遍歷所有項的迭代器，就像map[Symbol.iterator]()。實際上，它們就是同一個方法，不同名字。

### WeakMap
* WeakMap只支持new、has、get、set 和delete。
* WeakMap的鍵必須是對象
* 不可迭代

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined
