// [Array - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)

/**
*/
function inArray(value, array, fromIndex) {
    var d;
    var indexOf = [].indexOf;
    if (array) {
        if (!indexOf){
            return indexOf.call(array, value, fromIndex);
        }
        for (d = array.length, fromIndex = fromIndex ? 0 > fromIndex ? Math.max(0, d + fromIndex) : fromIndex : 0; d > fromIndex; fromIndex++) {
            if (fromIndex in array && array[fromIndex] === value) {
                return fromIndex;
            }
        }
    }
    return -1;
}

/**
 *
 *
 */
Array.remove = function(arr, el) {
    for(var i=arr.length-1;i>=0;--i){
        if(arr[i] == el){
            arr.splice(i, 1);
        }
    }
    return true;
};

function test_array_from(){
    // es6: Array.from:可以將類數組和可遍歷的數據結構轉換成真正的數組
    console.log('== Array.from() ==');
    console.log("Array.from({ '0':1,'1':1,length:2 })="+ JSON.stringify(Array.from({ '0':1,'1':1,length:2 })))
    console.log('Array.from(new Set([3,4]))='+JSON.stringify(Array.from(new Set([3,4]))));
    console.log('Array.from(new Set([3,4]),x => x+1 )='+JSON.stringify(Array.from(new Set([3,4]),x => x+1 )));
    console.log('Array.from({length:3},()=>"a")='+JSON.stringify(Array.from({length:3},()=>'a')));
}

function test_array_of(){
    // es6: Array.of:該方法可以將一組數轉換成數組，且總是返回以參數為數值的數組，這個可以避免Array構造函數帶來的歧義
    console.log('== Array.of() ==');
    console.log('Array.of(1,2,3)=' + JSON.stringify(Array.of(1,2,3))); // [ 1, 2, 3 ]
    console.log('Array.of(1)=' + JSON.stringify(Array.of(1))); // [ 1, 2, 3 ]
}

function test_array_find(){
    // es6: 用於找出數組中第一個符合條件的元素，沒有找到則返回undefined
    // http://www.w3schools.com/jsref/jsref_find.asp
    console.log('== find(function(currentValue,index,arr),thisValue) ==');
    console.log('[1,10,9,88].find(x=>x>10)='+[1,10,9,88].find(x=>x>10)); // 88
    console.log('[1,10,9,88].find(x=>x<1)='+[1,10,9,88].find(x=>x<1)); // undefined
}

function test_array_lastIndexOf(){
    // es5: 從後面往前找第一個符合元素的索引
    // http://www.w3schools.com/jsref/jsref_lastindexof_array.asp
    console.log('== lastIndexOf(item,start) ==');
    console.log('[1,2,3,4,5,6].lastIndexOf(2)='+[1,2,3,4,5,6].lastIndexOf(2));
    console.log('[1,2,3,4,3,2,1].lastIndexOf(2)='+[1,2,3,4,3,2,1].lastIndexOf(2));
    console.log('[1,2,3,4,3,2,1].lastIndexOf(2,3)='+[1,2,3,4,3,2,1].lastIndexOf(2,3));
    console.log('[1,2,1,2,3].lastIndexOf(99)='+[1,2,1,2,3].lastIndexOf(99));
}

function test_array_indexOf(){
    // es5: 從前面往後找第一個符合元素的索引
    // http://www.w3schools.com/jsref/jsref_indexof_array.asp
    console.log('== indexOf(item,start) ==');
    console.log('[1,2,3,4,5,6].indexOf(2)='+[1,2,3,4,5,6].indexOf(2));
    console.log('[1,2,3,4,3,2,1].indexOf(2)='+[1,2,3,4,3,2,1].indexOf(2));
    console.log('[1,2,3,4,3,2,1].indexOf(2,3)='+[1,2,3,4,3,2,1].indexOf(2,3));
    console.log('[1,2,1,2,3].indexOf(99)='+[1,2,1,2,3].indexOf(99));
}

function test_array_find_index(){
    // es6: 找出匹配元素所在的位置，未找到就返回-1
    // http://www.w3schools.com/jsref/jsref_findindex.asp
    console.log('== findIndex(function(currentValue,index,arr),thisValue) ==');
    console.log('[1,10,9,88].findIndex(x=>x>50)=' +[1,10,9,88].findIndex(x=>x>50)); // 3
    console.log('[1,10,9,88].findIndex(x=>x<1)='+[1,10,9,88].findIndex(x=>x<1)); // -1
}

function test_array_keys(){
    console.log('== keys() ==');
    console.log( '[1,2,5,7,11,15].keys()');
    for(let v of [1,2,5,7,11,15].keys()){
        console.log(v);
    }

    console.log('== entries() ==');
    console.log( '[1,2,5,7,11,15].entries()');
    for(let v of [1,2,5,7,11,15].entries()){
        console.log(v);
    }
}

function test_array_fill(){
    // 填滿指定元素
    // http://www.w3schools.com/jsref/jsref_fill.asp
    console.log('== fill(value,start,end) ==');
    console.log("[1,3,4].fill('a')="+JSON.stringify([1,3,4].fill('a'))); // [ 'a', 'a', 'a' ]
    console.log("[2,5,8,11].fill('a',1,2)="+JSON.stringify([2,5,8,11].fill('a',1,2))); // [ 2, 'a', 8, 11 ]
}

function test_array_push(){
    // 元素附加在最後
    // http://www.w3schools.com/jsref/jsref_push.asp
    console.log('== push(item1,item2, ..., itemX) ==');
    let a = ['a','c'];
    a.push('x', 'y');
    console.log(`
let a= ['a','c'];
a.push('x', 'y');
a=`+JSON.stringify(a));
}

function test_array_pop(){
    // 取出最後元素
    // http://www.w3schools.com/jsref/jsref_pop.asp
    console.log('== pop() ==');
    let a = ['a','c'];
    let b = a.pop();
    console.log(`
let a= ['a','c'];
let b = a.pop();
b='${b}'
a=${JSON.stringify(a)}`);
}

function test_array_unshift(){
    // 元素附加在開頭
    // http://www.w3schools.com/jsref/jsref_unshift.asp
    console.log('== unshift(item1,item2, ..., itemX) ==');
    let a = ['a','c'];
    a.unshift('x', 'y');
    console.log(`
let a= ['a','c'];
a.unshift('x', 'y');
a=${JSON.stringify(a)}`
    );
}

function test_array_shift(){
    // 移除開頭元素
    // http://www.w3schools.com/jsref/jsref_shift.asp
    console.log('== shift() ==');
    let a = ['a','c'];
    let b = a.shift();
    console.log(`
let a= ['a','c'];
let b = a.shift();
b='${b}',
a=${JSON.stringify(a)}`);
}

function test_array_map(){
    // es5: 每個元素套用指定函數
    // http://www.w3schools.com/jsref/jsref_map.asp
    console.log('== map(function(currentValue,index,arr), thisValue) ==');
    console.log('[1,2,3].map((v,idx,arr)=>{return v*2;})='+JSON.stringify([1,2,3].map((v,idx,arr)=>{return v*2;})));

}

function test_array_reduce(){
    // es5: 合併陣列成單一值
    // http://www.w3schools.com/jsref/jsref_reduce.asp
    console.log('== reduce(function(total,currentValue,currentIndex,arr),initialValue) ==');
    console.log('[1,2,3].reduce((t,v)=>{return t+v;}, 100)='+
        JSON.stringify([1,2,3].reduce((t,v)=>{return t+v;}, 100)));
    console.log(`['a','b','c'].reduce((t,v)=>{return t+v+'@';}, '')=`+
        JSON.stringify(['a','b','c'].reduce((t,v)=>{return t+v+'@';}, '')));
}

function test_array_reduceRight(){
    // es5: 從後面合併陣列成單一值
    // http://www.w3schools.com/jsref/jsref_reduceright.asp
    console.log('== reduceRight(function(total,currentValue,currentIndex,arr),initialValue) ==');
    console.log('[1,2,3].reduceRight((t,v)=>{return t+v;}, 100)='+
        JSON.stringify([1,2,3].reduceRight((t,v)=>{return t+v;}, 100)));
    console.log(`['a','b','c'].reduceRight((t,v)=>{return t+v+'@';}, '')=`+
        JSON.stringify(['a','b','c'].reduceRight((t,v)=>{return t+v+'@';}, '')));
}

function test_array_join(){
    // 每個元素套用指定函數
    // http://www.w3schools.com/jsref/jsref_join.asp
    console.log('== join(separator) ==');
    console.log(`[1,2,3].join('@')=`+[1,2,3].join('@'));

}

function test_array_reverse(){
    // 元素反向排列
    // http://www.w3schools.com/jsref/jsref_reverse.asp
    console.log('== reverse() ==');
    let a = [1,2,3];
    a.reverse();
    console.log(`
let a = [1,2,3];
a.reverse();
a=${JSON.stringify(a)}`);

}

function test_array_sort(){
    // 排序
    // http://www.w3schools.com/jsref/jsref_sort.asp
    console.log('== sort(function(a,b)) ==');
    let a = [5,8,2,9,4,8];
    a.sort();
    console.log(`
let a = [5,8,2,9,4,8];
a.sort();
a=${JSON.stringify(a)}`);

    a.sort((a,b)=>{return b-a;});
    console.log(`
let a = [5,8,2,9,4,8];
a.sort((a,b)=>{return b-a;});
a=${JSON.stringify(a)}`);

}

function test_array_filter(){
    // es5: 回傳符合指定函數的陣列元素
    // http://www.w3schools.com/jsref/jsref_join.asp
    console.log('== filter(function(currentValue,index,arr), thisValue) ==');
    console.log(`[1,2,3,4].filter((v,idx,arr)=>{return v%2==0;})=`+
        JSON.stringify([1,2,3,4].filter((v,idx,arr)=>{return v%2==0;})));

}

function test_array_every(){
    // es5: 檢查每個元素是否全部符合規則
    // http://www.w3schools.com/jsref/jsref_every.asp
    console.log('== every(function(currentValue,index,arr), thisValue) ==');
    console.log(`[1,2,3,4].every((v,idx,arr)=>{return v<10;})=`+
        JSON.stringify([1,2,3,4].every((v,idx,arr)=>{return v<10;})));
    console.log(`[1,2,3,4].every((v,idx,arr)=>{return v%2==0;})=`+
        JSON.stringify([1,2,3,4].every((v,idx,arr)=>{return v%2==0;})));
}

function test_array_some(){
    // es5: 檢查是否有符合規則的元素
    // http://www.w3schools.com/jsref/jsref_some.asp
    console.log('== some(function(currentValue,index,arr), thisValue) ==');
    console.log(`[1,2,3,4].some((v,idx,arr)=>{return v<0;})=`+
        JSON.stringify([1,2,3,4].some((v,idx,arr)=>{return v<0;})));
    console.log(`[1,2,3,4].some((v,idx,arr)=>{return v%2==0;})=`+
        JSON.stringify([1,2,3,4].some((v,idx,arr)=>{return v%2==0;})));
}

function test_array_isarray(){
    // 檢查是否為 array 型別
    // http://www.w3schools.com/jsref/jsref_isarray.asp
    console.log('== isArray(obj) ==');
    console.log(`Array.isArray([])=`+Array.isArray([]) );
    console.log(`Array.isArray({})=`+Array.isArray({}) );
    console.log(`Array.isArray({length:2})=`+Array.isArray({length:2}) );

}

function test_array_slice(){
    // 剪裁指定區段成新陣列
    // http://www.w3schools.com/jsref/jsref_slice_array.asp
    console.log('== slice(start, end) ==');
    console.log(`[1,2,3,4].slice(1,2)=`
        +JSON.stringify([1,2,3,4].slice(1,2)) );
    console.log(`[1,2,3,4].slice(-3,-1)=`
        +JSON.stringify([1,2,3,4].slice(-3,-1)) );
    console.log(`[1,2,3,4].slice(1)=`
        +JSON.stringify([1,2,3,4].slice(1)) );
    console.log(`[1,2,3,4].slice(99)=`
        +JSON.stringify([1,2,3,4].slice(99)) );

}

function test_array_copyWithin(){
    //
    // http://www.w3schools.com/jsref/jsref_copywithin.asp
    console.log('== copyWithin(start, end) ==');
    console.log(`[1,2,3,4].copyWithin(2,0)=`
        +JSON.stringify([1,2,3,4].copyWithin(2,0)) );
    console.log(`[1,2,3,4].copyWithin(3,0)=`
        +JSON.stringify([1,2,3,4].copyWithin(3,0)) );
    console.log(`[1,2,3,4].copyWithin(2,0,2)=`
        +JSON.stringify([1,2,3,4].copyWithin(2,0,2)) );
    console.log(`[1,2,3,4].copyWithin(3,0,2)=`
        +JSON.stringify([1,2,3,4].copyWithin(3,0,2)) );
    console.log(`[1,2,3,4].copyWithin(3,0,-2)=`
        +JSON.stringify([1,2,3,4].copyWithin(3,0,-2)) );
    console.log(`[1,2,3,4].copyWithin(3,5)=`
        +JSON.stringify([1,2,3,4].copyWithin(3,5)) );


}

function test_array_concat(){
    // 陣列合併
    // http://www.w3schools.com/jsref/jsref_concat_array.asp
    console.log('== concat(array2, array3,..., arrayX) ==');
    console.log(`[1,2].concat([3,4])=`
        +JSON.stringify([1,2].concat([3,4])));
    console.log(`[1,2].concat([3,4],[5,6])=`
        +JSON.stringify([1,2].concat([3,4],[5,6])));
}

function test_array_splice(){
    // [javascript - How to insert an item into an array at a specific index? - Stack Overflow](http://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index)
    // [Array.prototype.splice() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    // http://www.w3schools.com/jsref/jsref_splice.asp
    console.log('== splice(index,howmany,item1,.....,itemX) ==');
    let a = ["Banana", "Orange", "Apple", "Mango"];
    a.splice(2, 0, "Lemon", "Kiwi");
    console.log(`
    let a = ["Banana", "Orange", "Apple", "Mango"];
    a.splice(2, 0, "Lemon", "Kiwi");
    a=${JSON.stringify(a)}`);

    let b = ["Banana", "Orange", "Apple", "Mango"];
    b.splice(2, 1, "Lemon", "Kiwi");
    console.log(`
    let b = ["Banana", "Orange", "Apple", "Mango"];
    b.splice(2, 1, "Lemon", "Kiwi");
    b=${JSON.stringify(b)}`);
    // 移除兩個元素. 新增兩個元素
    let c = ["Banana", "Orange", "Apple", "Mango"];
    c.splice(2, 2, "Lemon", "Kiwi");
    console.log(`
    let c = ["Banana", "Orange", "Apple", "Mango"];
    c.splice(2, 2, "Lemon", "Kiwi");
    c=${JSON.stringify(c)}`);
}

function typed_array(){
    // [Typed Arrays in ECMAScript 6](http://www.2ality.com/2015/09/typed-arrays.html)
    console.log('== Typed Array ==');
    let typedArray = new Uint8Array([0,1,2]);
    console.log(typedArray.length); // 3
    typedArray[0] = 5;
    let normalArray = [...typedArray]; // [5,1,2]
    // The elements are stored in typedArray.buffer.
    // Get a different view on the same data:
    let dataView = new DataView(typedArray.buffer);
    console.log(dataView.getUint8(0)); // 5
}

function random_array(){
    console.log('== Random Array ==');
    let arr = [1,2,3,4,5,6,7,8,9,10];
    console.log(`before = ${JSON.stringify(arr)}`);
    let random_arr = arr.sort(() => {
                return Math.random() - 0.5
            });
    console.log(`after = ${JSON.stringify(random_arr)}`);
}

function main(){
    console.log( inArray(3, [1,2,3])); // 2
    console.log( inArray(99, [1,2,3])); // -1

    let arr = [1,2,3,3];
    Array.remove( arr, 3 );
    console.log( arr );

    test_array_from();
    test_array_of();
    test_array_reverse();
    test_array_sort();
    test_array_concat();

    test_array_find();
    test_array_find_index();
    test_array_indexOf();
    test_array_lastIndexOf();

    test_array_keys();
    test_array_fill();

    test_array_unshift();
    test_array_shift();
    test_array_splice();
    test_array_push();
    test_array_pop();
    test_array_slice();
    test_array_copyWithin();
    test_array_map();
    test_array_reduce();
    test_array_reduceRight();
    test_array_filter();
    test_array_every();
    test_array_some();

    test_array_join();
    test_array_isarray();
    
    typed_array();
    random_array();
}

main();

