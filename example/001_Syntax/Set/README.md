
### Set
* 一個Set不會包含相同元素
* Set是可以包含JS中任何類型的值的
* Set不能提供的則是索引
* Set 優化 has 檢查元素是否存在
// Sets 
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

#### 方法
new Set：創建一個新的、空的Set。
new Set(iterable)：從任何可遍曆數據中提取元素，構造出一個新的集合。
set.size：獲取集合的大小，即其中元素的個數。
set.has(value)：判定集合中是否含有指定元素，返回一個布爾值。
set.add(value)：添加元素。如果與已有重複，則不產生效果。
set.delete(value)：刪除元素。如果並不存在，則不產生效果。.add()和.delete()都會返回集合自身，所以我們可以用鏈式語法。
set[Symbol.iterator]()：返回一個新的遍歷整個集合的迭代器。一般這個方法不會被直接調用，因為實際上就是它使集合能夠被遍歷，也就是說，我們可以直接寫for (v of set) {...}等等。
set.forEach(f)：直接用代碼來解釋好了，它就像是for (let value of set) { f(value, value, set); }的簡寫，類似於數組的.forEach()方法。
set.clear()：清空集合。
set.keys()、set.values()和set.entries()返回各種迭代器，它們是為了兼容Map而提供的，所以我們待會兒再來看。

### WeakSet
* WeakSet只支持new、has、add和delete。
* WeakSet的值必須是對象
* 不可迭代

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });