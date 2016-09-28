const
    assert = require('assert');
    

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

function main(){
    test_array_keys();

    test_array_unshift();
    test_array_shift();
    test_array_splice();
    test_array_push();
    test_array_pop();
    test_array_copyWithin();
    test_array_map();
    test_array_reduce();
    test_array_reduceRight();

    
}


// [Typed Arrays in ECMAScript 6](http://www.2ality.com/2015/09/typed-arrays.html)
describe('Typed Array', function(){
    let typedArray = new Uint8Array([0,1,2]);
    it('.length', ()=>{
        assert.equal(typedArray.length, 3);
    });
    
    it('[] operator', ()=>{
        typedArray[0] = 5;
        assert.equal(typedArray[0], 5);
    });
    
    it('to Array', ()=>{
        let normalArray = [...typedArray];
        assert.ok(Array.isArray( normalArray ) );
        assert.ok(!Array.isArray( typedArray ) );
        assert.equal(normalArray.length,3 );
        assert.equal(normalArray.join(','),'5,1,2' );
    });
    
    it('to DataView', ()=>{
        // The elements are stored in typedArray.buffer.
        // Get a different view on the same data:
        let dataView = new DataView(typedArray.buffer);
        assert.equal(dataView.getUint8(0), 5);
    });
});

describe('Array', ()=>{
    /**
     * 檢查是否為 array 型別
     * http://www.w3schools.com/jsref/jsref_isarray.asp
     */
    describe('Array.isArray(obj)', ()=>{
        it('[] 是陣列', ()=>{
            assert.equal(Array.isArray([]), true);
        });
        
        it('"[]" 不是陣列', ()=>{
            assert.equal(Array.isArray('[]'), false);
        });
        
        it('new Array() 是陣列', ()=>{
            assert.equal( Array.isArray( new Array() ), true);
        });
        
        it('{} 不是陣列', ()=>{
            assert.equal(Array.isArray({}), false);
        });
        
        it('{length:2} 不是陣列', ()=>{
            assert.equal(Array.isArray({length:2}), false );
        });

    });
        
    /**
     * es6: Array.from:可以將類數組和可遍歷的數據結構轉換成真正的數組
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
     */
    describe('Array.from(arrayLike[, mapFn[, thisArg]])', ()=>{
        it('指定索引和 length 的物件', ()=>{
            let a = Array.from({ '0':1,'1':2,length:2 });
            assert.equal( Array.isArray(a), true);
            assert.equal(a.length, 2);
            assert.equal(a[0], 1);
            assert.equal(a[1], 2);
        });
        it('Set 轉 Array', ()=>{
            let a = Array.from(new Set([3,4]));
            assert.equal(a.length, 2);
            assert.equal(a[0], 3);
            assert.equal(a[1], 4);
        });
        
        it('指定 mapFn, 套用到每個元素', ()=>{
            let a = Array.from(new Set([3,4]),x => x+1 );
            assert.equal(a.length, 2);
            assert.equal(a[0], 4);
            assert.equal(a[1], 5);
        });
        
        it('mapFn 初始化元素', ()=>{
            let a = Array.from({length:3},()=>'a');
            assert.equal( a.length, 3);
            assert.equal( a.every( v=> v=='a'), true);
        });
        
        it('Map 轉 Array', ()=>{
            let a = Array.from(new Map([
                [1, 2], 
                [2, 4], 
                [4, 8]]
            )); 
            
            assert.equal(a.length, 3);
            assert.equal(a[0][0], 1);
            assert.equal(a[2][1], 8);
        });
        
        it('String 轉 Array', ()=>{
            let a = Array.from('arick');
            assert.equal(a.length, 5);
            assert.equal(a[0], 'a');
            assert.equal(a[4], 'k');
        });
        
        it('function arguments 轉 Array', ()=>{
            function f(){
                return Array.from(arguments);
            }
            
            let a = f(1, 2, 3);
            assert.equal(a.length, 3);
            assert.equal(a[0], 1);
            assert.equal(a[1], 2);
            assert.equal(a[2], 3);
            
        });
    });

    /**
     * es6: Array.of:該方法可以將一組數轉換成數組，且總是返回以參數為數值的數組，這個可以避免Array構造函數帶來的歧義
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
     */
    describe('Array.of(element0[, element1[, ...[, elementN]]])', ()=>{
        it('Array.of(1,2,3)', ()=>{
            let a = Array.of(1,2,3);
            assert.equal( Array.isArray(a), true);
            assert.equal(a.length, 3);
            assert.equal(a[0], 1);
            assert.equal(a[1], 2);
            assert.equal(a[2], 3);
        });
        
        it('1個元素', ()=>{
            let a = Array.of(1);
            assert.equal( Array.isArray(a), true);
            assert.equal(a.length, 1);
            assert.equal(a[0], 1);
        });
        it('1個 undefined 元素', ()=>{
            let a = Array.of(undefined);
            assert.equal( Array.isArray(a), true);
            assert.equal(a.length, 1);
            assert.equal(a[0], undefined);
        });
        it('1個 null 元素', ()=>{
            let a = Array.of(null);
            assert.equal( Array.isArray(a), true);
            assert.equal(a.length, 1);
            assert.equal(a[0], null);
        });
    });


});

describe('index.js', ()=>{
        
    const ext = require('./index');
    describe('取陣列中數值最大', function(){
       it('Math.max()', ()=>{
           assert.equal(ext.max( [5, 10, 50]), 50);
       });
    });

    describe('取陣列中數值最小', function(){
       it('Math.min()', ()=>{
           assert.equal(ext.min([5, 10, 50] ), 5);
       });
    });
    
    describe('remove', function(){
        it('移除存在元素', ()=>{
            let arr = [1,2,3,3];
            ext.remove( arr, 3 );
            assert.equal(arr.length, 2);
        });
        it('移除不存在元素', ()=>{
            let arr = [1,2,3,3];
            ext.remove( arr, 99 );
            assert.equal(arr.length, 4);
        });
    });

    describe('inArray', function(){
        let arr = [1,2,3];
        it('有指定元素', ()=>{
            assert.equal( ext.inArray(3, arr), 2);
        });
        it('沒有指定元素', ()=>{
            assert.equal( ext.inArray(99, arr), -1);
        });
    });

    describe('random', function(){
        let arr = [1,2,3,4,5,6,7,8,9,10];
        let v = arr.join(',');
        it('陣列亂數排序', function(){
            ext.random(arr);
            assert.ok( arr.join(',') != v );
        });
    });

});

describe('Array.prototype', ()=>{
    /**
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
     */
    describe('includes(searchElement[, fromIndex])', function(){
        let months = ['January', 'March', 'July'];  

        it('有指定元素', ()=>{
            assert.equal(months.includes('March'), true);
        });
        it('沒有指定元素', ()=>{
            assert.equal(months.includes('August'), false);
        });
    });
        
    /**
     *
     * http://www.w3schools.com/jsref/jsref_concat_array.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
     */
    describe('陣列合併 concat(array2, array3,..., arrayX)', ()=>{
        it('[1,2].concat([3,4])=new [1,2,3,4]', ()=>{
            let v = [1,2].concat([3,4]);
            assert.equal(v.length, 4);
            assert.equal(v[0], 1);
            assert.equal(v[1], 2);
            assert.equal(v[2], 3);
            assert.equal(v[3], 4);
        });
        it('[1,2].concat([3,4],[5,6])', ()=>{
            let v = [1,2].concat([3,4],[5,6]);
            assert.equal(v.length, 6);
            assert.equal(v[0], 1);
            assert.equal(v[1], 2);
            assert.equal(v[2], 3);
            assert.equal(v[3], 4);
            assert.equal(v[4], 5);
            assert.equal(v[5], 6);
        });
        it('array.push - 修改陣列值', ()=>{
            let array1 = [1,2,3];
            let array2 = [4,5,6];
            array1.push.apply(array1, array2); // [1,2,3,4,5,6];
            let v = array1;
            assert.equal(v.length, 6);
            assert.equal(v[0], 1);
            assert.equal(v[1], 2);
            assert.equal(v[2], 3);
            assert.equal(v[3], 4);
            assert.equal(v[4], 5);
            assert.equal(v[5], 6);
        });
        
    });


    /**
     * 剪裁指定區段成新陣列
     *
     * http://www.w3schools.com/jsref/jsref_slice_array.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    describe('slice([begin[, end]])', ()=>{
        it('不指定 begin(預設0), end(預設length), 全部元素複製一份', ()=>{
            let a = [1,2,3,4];
            let b = a.slice();
            assert.equal(b.length, 4);
            assert.equal(b[0], 1);
            assert.equal(b[1], 2);
            assert.equal(b[2], 3);
            assert.equal(b[3], 4);
        });
        
        it('指定begin,end, 複製 >= begin && < end', ()=>{
            let a = [1,2,3,4].slice(1,2);
            assert.equal(a.length, 1);
            assert.equal(a[0], 2);
        });
        
        it('忽略 end 預設 length', ()=>{
            let a = [1,2,3,4].slice(1);
            assert.equal(a.length, 3);
            assert.equal(a[0], 2);
            assert.equal(a[1], 3);
            assert.equal(a[2], 4);
        });
            
        it('start 大於 length 返回空陣列', ()=>{
            let a = [1,2,3,4].slice(99);
            assert.equal(Array.isArray(a), true);
            assert.equal(a.length, 0);
        });
        
        it('function arguments 轉 Array', ()=>{
            function f(){
                return Array.prototype.slice.call(arguments);
            }
            let a = f(1,2,3,4);
            assert.equal(Array.isArray(a), true);
            assert.equal(a.length, 4);
            assert.equal(a[0], 1);
            assert.equal(a[1], 2);
            assert.equal(a[2], 3);
            assert.equal(a[3], 4);
        });
        
        it('取最後一個元素', ()=>{
            let a = [1,2,3,4].slice(-1);
            assert.equal(a.length, 1);
            assert.equal(a[0], 4);
        })/
        
        it('砍頭去尾取中間', ()=>{
            let a = [1,2,3,4,5].slice(1,-1);
            assert.equal(a.length, 3);
            assert.equal(a[0], 2);
            assert.equal(a[1], 3);
            assert.equal(a[2], 4);
        });
        
        it('取倒數2和3', ()=>{
            let a = [1,2,3,4,5].slice(-3,-1);
            assert.equal(a.length, 2);
            assert.equal(a[0], 3);
            assert.equal(a[1], 4);
        });
    });

    /**
     * 陣列合併成字串
     *
     * http://www.w3schools.com/jsref/jsref_join.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     */
    describe('join(separator)', ()=>{
        it("join('')", ()=>{
            let a = [1,2,3];
            let b = a.join('');
            assert.equal(b, '123');
        });
        
        it("join('@')", ()=>{
            let a = [1,2,3];
            let b = a.join('@');
            assert.equal(b, '1@2@3');
        });
        it("join('=-=')", ()=>{
            let a = [1,2,3];
            let b = a.join('=-=');
            assert.equal(b, '1=-=2=-=3');
        });
        it("長度1陣列", ()=>{
            let a = [1];
            let b = a.join(',');
            assert.equal(b, '1');
        });
        it("長度0陣列", ()=>{
            let a = [];
            let b = a.join(',');
            assert.equal(b, '');
        });
        
    });
    
    /**
     * 元素反向排列
     *
     * http://www.w3schools.com/jsref/jsref_reverse.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
     */
    describe('reverse()', ()=>{
        it('數值', ()=>{
            let a = [1,2,3];
            a.reverse();
            assert.equal(a[0], 3);
            assert.equal(a[1], 2);
            assert.equal(a[2], 1);
        });
        it('字串', ()=>{
            let a = ['aaaa', 'bbb', 'cc'];
            a.reverse();
            assert.equal(a[0], 'cc');
            assert.equal(a[1], 'bbb');
            assert.equal(a[2], 'aaaa');
        });

    });

    /**
     * http://www.w3schools.com/jsref/jsref_sort.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    describe('sort(function(a,b))', ()=>{
        it('預設使用字串排序', ()=>{
            let a = [5,8,2,9,4, 1,8,10];
            a.sort();
            assert.equal( a[0], 1);
            assert.equal( a[1], 10);
            assert.equal( a[2], 2);
            assert.equal( a[7], 9);
        });
        
        it('依據數字大->小', ()=>{
            let a = [5,8,2,9,4, 1,8,10];
            a.sort((a,b)=>{return b-a;});
            
            assert.equal(a[0], 10);
            assert.equal(a[1], 9);
            assert.equal(a[7], 1);
        });
        
        it('依據數字小->大', ()=>{
            let a = [5,8,2,9,4, 1,8,10];
            a.sort((a,b)=>{return a-b;});
            
            assert.equal(a[0], 1);
            assert.equal(a[1], 2);
            assert.equal(a[7], 10);
        });
    });

    /**
     * http://www.w3schools.com/jsref/jsref_join.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     */
    describe('es5: 回傳符合指定函數的陣列元素', ()=>{
        let v = [1,2,3,4].filter((v,idx,arr)=>{
            return v%2==0;
        });
        assert.equal(v.length, 2);
        assert.equal(v[0], 2);
        assert.equal(v[1], 4);
    });

    /**
     * es5: 檢查每個元素是否全部符合規則
     *
     * http://www.w3schools.com/jsref/jsref_every.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     */
    describe('every(function(currentValue,index,arr), thisValue)', ()=>{
        it('全部小於10-成立', ()=>{
            let a = [1, 3, 8, 9];
            let b = a.every( (v, idx, arr)=> v<10);
            assert.equal(b, true);
        });
        it('全部偶數-不成立', ()=>{
            let a = [1,2,3,4];
            let b = a.every( (v,idx,arr)=>v%2==0);
            assert.equal( b, false);
        });
    });

    /**
     * es5: 檢查是否有符合規則的元素
     *
     * http://www.w3schools.com/jsref/jsref_some.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     */
    describe('some(function(currentValue,index,arr), thisValue)', ()=>{
        it('是否有元素小於0-不成立', ()=>{
            let a = [1,2,3,4];
            let b = a.some( (v,idx,arr)=>v<0);
            assert.equal(b, false);
        });
        it('是否有偶數-成立', ()=>{
            let a = [1,2,3,4];
            let b = a.some( (v,idx,arr) => v % 2 == 0);
            assert.equal(b, true);
        });
    })

    /**
     * es6: 用於找出數組中第一個符合條件的元素，沒有找到則返回undefined
     *
     * http://www.w3schools.com/jsref/jsref_find.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
     */
    describe('find(function(currentValue,index,arr)[, thisArg])', ()=>{
        it('找到符合的元素, 返回元素值', ()=>{
            let a = [1,10,9,88].find((value, idx, arr)=>value>50); 
            assert.equal(a, 88);
        });
        it('沒找到符合的元素, 返回 undefined', ()=>{
        
            let a = [1,10,9,88].find((value, idx, arr)=>value<1);
            assert.equal(a, undefined);
        });
        
        it('多個符合元素, 返回第一個符合元素值', ()=>{
            let a = [1,10,51, 9,88].find((value, idx, arr)=>value>50); 
            assert.equal(a, 51);
        });
    });

    /**
     * es6: 找出匹配元素所在的位置，未找到就返回-1
     *
     * http://www.w3schools.com/jsref/jsref_findindex.asp
     * https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    describe('findIndex(function(currentValue,index,arr)[, thisArg])', ()=>{
        it('找到符合的元素, 返回索引', ()=>{
            let a = [1,10,9,88].findIndex((value, idx, arr)=>value>50); 
            assert.equal(a, 3);
        });
        it('沒找到符合的元素, 返回-1', ()=>{
        
            let a = [1,10,9,88].findIndex((value, idx, arr)=>value<1);
            assert.equal(a, -1);
        });
        
        it('多個符合元素, 返回第一個符合索引', ()=>{
            let a = [1,10,51, 9,88].findIndex((value, idx, arr)=>value>50); 
            assert.equal(a, 2);
        });
    });

    
    /**
     * es5: 從前面往後找第一個符合元素的索引
     *
     * http://www.w3schools.com/jsref/jsref_indexof_array.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     */
    describe('== indexOf(item,start) ==', ()=>{
        it('不指定 start 預設 length', ()=>{
            let a = [1,2,3,4,5,6].indexOf(2);
            assert.equal(a, 1);
        });
        
        it('找不到返回 -1', ()=>{
            let a = [1,2,3,4].indexOf(99);
            assert.equal(a, -1);
        });
        
        it('找第2個符合元素', ()=>{
            let a = [1,2,3,2,1];
            let b = a.indexOf(2);
            let c = a.indexOf(2, b+1);
            assert.equal(c, 3);
        });
        
        it('找最後一個符合元素', ()=>{
            let a = [1,2,3,2,3,2,4];
            let pos = -1;
            let tmp;
            while((tmp = a.indexOf(2, pos+1))>0){
                pos = tmp;
            }
            assert.equal(pos, 5);
        });
        
        it('start 超過 length, 返回 -1', ()=>{
            let a =[1,2,3].indexOf(1, 99);
            assert.equal(a, -1);
        });
        it('start <0, 預設為 0', ()=>{
            let a =[1,2,3].indexOf(2, -10);
            assert.equal(a, 1);
        });
    });

    
    /**
     * es5: 從後面往前找第一個符合元素的索引
     *
     * http://www.w3schools.com/jsref/jsref_lastindexof_array.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
     */
    describe('lastIndexOf(item,start)', ()=>{
        it('忽略 start, 預設 length', ()=>{
            let a = [1,2,3,4,5,6].lastIndexOf(2);
            assert.equal(a, 1);
        });
        
        it('後往前第一個符合元素', ()=>{
            let a = [1,2,3,4,3,2,1].lastIndexOf(2);
            assert.equal(a, 5);
        });
        
        it('指定 start = 0 往前找', ()=>{
            let a = [1,2,3,4,3,2,1].lastIndexOf(1, 0);
            assert.equal(a, 0);
        });
        
        it('指定 start(含) 往前找', ()=>{
            let a = [1,2,3,4,3,2,1].lastIndexOf(2, 2);
            assert.equal(a, 1);
        });
        it('指定 start = length', ()=>{
            let a = [1,2,3,4,3,2,1];
            let b = a.lastIndexOf(2, a.length);
            assert.equal(b, 5);
        });
        it('指定 start > length, 預設 length', ()=>{
            let a = [1,2,3,4,3,2,1];
            let b = a.lastIndexOf(2, 99);
            assert.equal(b, 5);
        });
        it('指定 start <0, 預設 0', ()=>{
            let a = [2,3,4,3,2,1];
            let b = a.lastIndexOf(2, -10);
            assert.equal(b, -1);
        });
    });
    
    /**
     * 填滿指定元素
     *
     * http://www.w3schools.com/jsref/jsref_fill.asp
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
     */
    describe('fill(value,start,end)', ()=>{
        it("不指定 start 和 end, 填滿全部", ()=>{
            let a = [1,3,4].fill('a');
            assert.equal(a.length, 3);
            assert.equal(a.every( (v,idx,arr)=>v=='a'), true);
        });
        
        it('指定 start 和 end 填滿 >= start && < end', ()=>{
            let a = [2,5,8,11].fill('a',1,2);
            assert.equal(a[0], 2);
            assert.equal(a[1], 'a');
            assert.equal(a[2], 8);
            assert.equal(a[3], 11);
        });
        it('忽略 end 預設為 length', ()=>{
            let a = [2,5,8,11].fill('a',1);
            assert.equal(a[0], 2);
            assert.equal(a[1], 'a');
            assert.equal(a[2], 'a');
            assert.equal(a[3], 'a');
        });
    });
});
