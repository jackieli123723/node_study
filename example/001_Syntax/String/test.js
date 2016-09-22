const 
    assert = require('assert');


describe('index.js test', ()=>{
    const ext = require('./index');
    
    it('decodeHTML()', ()=>{
        assert.equal(ext.decodeHTML('&quot;&apos;&lt;&amp;&gt;&apos;&quot;'), '"\'<&>\'"');
    });
    it('encodeHTML()', ()=>{
        assert.equal(ext.encodeHTML('"\'<&>\'"'), '&quot;&apos;&lt;&amp;&gt;&apos;&quot;');
    });
    it('reverse()', ()=>{
        assert.equal(ext.reverse('123'), '321');
    });
    it('explode()', ()=>{
        let r = ext.explode('1,2,3,4,5', ',', 2);
        assert.equal( r.length, 2);
        assert.equal( r[0], '1');
        assert.equal( r[1], '2,3,4,5');
    });
    it('pad()', ()=>{
        let r = ext.pad('1', 3, '0', 'left');
        assert.equal( r, '001');
        let r2 = ext.pad('1', 3, '0', 'right');
        assert.equal( r2, '100');
    });
});

describe('String', ()=>{
    it('Template literals', ()=>{
        let s='a', i = 100, f=3.14, a={v:1};
        assert.equal(`${s}-${i}-${f}`, 'a-100-3.14');
        assert.equal(`${i*2}`, '200');
        assert.equal(`${JSON.stringify(a)}`, '{"v":1}');
    });
    
    it('Character access', ()=>{
        assert.equal('cat'.charAt(1), 'a');
        assert.equal('cat'[1], 'a');
    });
    it('String.fromCharCode(num1[, ...[, numN]])', ()=>{
        assert.equal(String.fromCharCode(65, 66, 67), 'ABC');
    });
});

describe('String.prototype', ()=>{
    describe('.repeat(count)', ()=>{
        let s = 'abc';
        
        it('count =0 返回空字串', ()=>{
            assert.equal('abc'.repeat(0), '');
        });
        
        it('count <0 RangeError 錯誤', ()=>{
            try{
                'abc'.repeat(-1);
            }catch(ex){
                assert.equal(ex.name, 'RangeError');
            }
        });
        
        it('count > 1 字串重複指定次數', ()=>{
            assert.equal('abc'.repeat(1), 'abc');
            assert.equal('abc'.repeat(2), 'abcabc');
        });
        
        it('count 使用浮點數, 會轉成 int', ()=>{
            assert.equal('abc'.repeat(3.5), 'abcabcabc');
        });
        
        it('count is NaN 返回空字串', ()=>{
            
            assert.equal('abc'.repeat(NaN), '');
        });
    });
    
    // 建議用 + 運算子效能較佳
    it('.concat(string2[, string3, ..., stringN])', ()=>{
        assert.equal('hello '.concat('arick'), 'hello arick');
        
    });
    
    describe('.split([separator[, limit]])', ()=>{
        it('分割字串成陣列', ()=>{
            let r = 'a,b,c,d'.split(',');
            assert.equal(r.length, 4);
            assert.equal(r[0], 'a');
        });
        it('限制最大分割的陣列數目, 超過的捨棄', ()=>{
            let r = 'a,b,c,d'.split(',', 2);
            assert.equal(r.length, 2);
            assert.equal(r[0], 'a');
            assert.equal(r[1], 'b');
        });
        it('正規表示法切割', ()=>{
            let names = 'Harry Trump ;Fred Barney;';
            let re = /\s*;\s*/;
            let nameList = names.split(re);
            assert.equal(nameList.length, 3);
            assert.equal(nameList[0], 'Harry Trump');
            assert.equal(nameList[1], 'Fred Barney');
            assert.equal(nameList[2], '');
        });
        it('正規表示法切割, 保留分割字串', ()=>{
            let myString = 'Hello 1 word. Sentence number 2.';
            let splits = myString.split(/(\d)/);

            assert.equal(splits.length, 5);
            assert.equal(splits[1], '1');
            assert.equal(splits[3], '2');
        });
        it('實作 Reverse', ()=>{
            assert.equal( 'abc'.split('').reverse().join(''), 'cba');
        });
    });
    
    
    describe('.replace(regexp|substr, newSubStr|function)', ()=>{
        it('regexp + function', ()=>{
            function replacer(match, p1, p2, p3, offset, string) {
              // p1 is nondigits, p2 digits, and p3 non-alphanumerics
              return [p1, p2, p3].join(' - ');
            }
            let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
            assert.equal(newString, 'abc - 12345 - #$*%');
        });
        it('regexp + string', ()=>{
            let str = 'Twas the night before Xmas...';
            let newstr = str.replace(/xmas/i, 'Christmas');
            assert.equal(newstr, 'Twas the night before Christmas...');
        });
        it('忽略大小寫, 代換所有符合的字串', ()=>{
            let re = /apples/gi;
            let str = 'Apples are round, and apples are juicy.';
            let newstr = str.replace(re, 'oranges');
            assert.equal(newstr, 'oranges are round, and oranges are juicy.');
        });
        it('重新編排字串位置', ()=>{
            let re = /(\w+)\s(\w+)/;
            let str = 'John Smith';
            let newstr = str.replace(re, '$2, $1');
            assert.equal(newstr, 'Smith, John');
        });
    });
    
    describe('.search(regexp)', ()=>{
        it('找不到, 返回-1', ()=>{
            assert.equal('abcdef'.search(/ff/), -1);
        });
        it('找到, 返回位置', ()=>{
            assert.equal('abcdef'.search(/def$/), 3);
        });
        it('regexp 非 RegExp 物件, 自動轉換', ()=>{
            assert.equal('abcdef'.search('def'), 3);
        });
    });
    
    describe('.indexOf(searchValue[, fromIndex])', ()=>{
        let s = 'abcde';
        it('搜尋字串, fromIndex 預設 0, 返回搜尋位置', ()=>{
            assert.equal(s.indexOf('cde', 0), 2);
            assert.equal(s.indexOf('cde'), 2);
        });
        it('搜尋有區分大小寫', ()=>{
            assert.equal(s.indexOf('CDE'), -1);
        });
        it('找不到', ()=>{
            assert.equal(s.indexOf('fffff'), -1);
        });
        it('fromIndex 超過字串長度直接返回 -1', ()=>{
            assert.equal(s.indexOf('a', 99999), -1);
        });
        it('fromIndex < 0 等同 fromIndex=0', ()=>{
            assert.equal(s.indexOf('a', -3), 0);
            assert.equal(s.indexOf('a', -99), 0);
        });
        it('搜尋空字串, 直接返回 fromIndex', ()=>{
            assert.equal(s.indexOf('', 3), 3);
            assert.equal(s.indexOf('', 999), s.length);
        });
    });
    
    describe('.lastIndexOf(searchValue[, fromIndex])', ()=>{
        let s = 'canal';
        it('找不到返回 -1', ()=>{
            assert.equal( s.lastIndexOf('a', 0), -1);
        });
        
        it('從字串尾端往前找. fromIndex 預設值 +Infinity', ()=>{
            assert.equal( s.lastIndexOf('a'), 3);
            assert.equal( s.lastIndexOf('a', 2), 1);
        });
        
        it('fromIndex<0, 等同 fromIndex =0', ()=>{
            assert.equal( s.lastIndexOf('a', -1), -1);
            assert.equal( s.lastIndexOf('c', -1), 0);
        });
        it('fromIndex 非數值, 等同預設值', ()=>{
            assert.equal( s.lastIndexOf('a', 'xxxxx'), 3);
            assert.equal( s.lastIndexOf('a', NaN), 3);
        });
        it('searchValue為空字串返回 fromIndex', ()=>{
            assert.equal( s.lastIndexOf(''), s.length);
            assert.equal( s.lastIndexOf('', 2), 2);
        });
        
        
    });
    
    describe('.startsWith(searchString[, position])', ()=>{
        let s = 'hello world';
        it('基本測試', ()=>{
            assert.equal(s.startsWith("hello"), true);
            assert.equal(s.startsWith("hello", 0), true);
            assert.equal(s.startsWith("world"), false);
        });
        it('指定起始位置, 預設0', ()=>{
            assert.equal(s.startsWith("world", 6), true);
        });
    });
    
    describe('.endsWith(searchString[, position])', ()=>{
        let s = 'hello world';
        it('基本測試', ()=>{
            assert.equal(s.endsWith("hello"),false); 
            assert.equal(s.endsWith("world"), true); 
        });
        it('position 預設 s.length', ()=>{
            assert.equal(s.endsWith("world", s.length), true);
        });
        
        it('指定 position', ()=>{
            assert.equal(s.endsWith("hello", 5), true);
        });
    });
    
    describe('.includes(searchString[, position])', ()=>{
        it('區分大小寫', ()=>{
            assert.equal( 'Blue Whale'.includes('blue'), false);
        });
        it('檢查字串是否存在', ()=>{
            assert.equal( 'Blue Whale'.includes('Whale'), true);
        });
        it('指定起始位置', ()=>{
            assert.equal( 'Blue Whale'.includes('Blue', 1), false);
        });
    });
    
    // 取代 charCodeAt
    it('.codePointAt(pos)', ()=>{
        assert.equal('ABC'.codePointAt(1), 66);
        assert.equal('\uD800\uDC00'.codePointAt(0), 65536);
        assert.equal('XYZ'.codePointAt(42), undefined);
    });
    
    describe('.substring(indexStart[, indexEnd])', ()=>{
        const s = 'Hello world!';
        it('基本測試', ()=>{
            assert.equal(s.substring(1, 4), 'ell');
            assert.equal(s.substring(2), 'llo world!');
            assert.equal(s.substring(0, 1), 'H');
            assert.equal(s.substring(11, 1), s.substring(1, 11));
        });
        
        it('indexStart == indexEnd 返回空字串', ()=>{
            assert.equal(s.substring(1,1), '');
        });
        
        it('indexStart <0 會以 0 處理', ()=>{
            assert.equal(s.substring(-3, 1), s.substring(0, 1));
        });
        
        it('indexStart 為 NaN 以 0 處理', ()=>{
            assert.equal(s.substring(NaN, 1), s.substring(0, 1));
        });
        
        it('忽略 indexEnd 以 .length 處理', ()=>{
            assert.equal(s.substring(0), s.substring(0, s.length));
        });
        
        it('indexEnd 超過 .length 以 .length 處理', ()=>{
            assert.equal(s.substring(0, 999), s.substring(0));
        });
        
        it('indexEnd 為 NaN 則為 空字串', ()=>{
            assert.equal(s.substring(0, NaN), '');
        });
        
        it('indexStart < indexEnd 則兩參數會互換', ()=>{
            assert.equal(s.substring(4, 1), s.substring(1, 4));
        });
    });
    
    describe('.substr(start [, length])', ()=>{
        const s = 'Hello world!';
        it('基本測試', ()=>{
            assert.equal( s.substr(1, 4), 'ello');
            assert.equal( s.substr(2), 'llo world!');
            assert.equal( s.substr(0, 1), 'H');
            assert.equal( s.substr(11, 1), '!');
            assert.equal( s.substr(99, 1), '');
        });
        
        it('反向取字串', ()=>{
            assert.equal( s.substr(-1, 1), '!');
            assert.equal( s.substr(-2, 1), 'd');
        });
        
        it('length =0 為空字串', ()=>{
            assert.equal( s.substr(0, 0), '');
        });
    });
    
    describe('.slice(beginSlice[, endSlice])', ()=>{
        let s = "Hello world!";
        it('endSlice 預設值 .length', ()=>{
            assert.equal(s.slice(3), 'lo world!');
        });
        
        it('指定 beginSlice, endSlice 區間', ()=>{
            assert.equal(s.slice(3, 8), 'lo wo');
            assert.equal(s.slice(0,1), 'H');
        });
        it('beginSlice <0', ()=>{
            assert.equal(s.slice(-1), '!');
        });
        it('endSlice <0', ()=>{
            assert.equal(s.slice(0, -1), 'Hello world');
        });
        it('beginSlice <0 && endSlice <0', ()=>{
            assert.equal(s.slice(-3, -1), 'ld');
        });
    });
    
    it('.toLowerCase()', ()=>{
        assert.equal( 'aBcD'.toLowerCase(), 'abcd');
    });
    
    it('.toUpperCase()', ()=>{
        assert.equal( 'aBcD'.toUpperCase(), 'ABCD');
    });
    
    it('.trim()', ()=>{
        assert.equal( '   foo  '.trim(), 'foo');
        assert.equal( 'foo    '.trim(), 'foo');
    });
});

describe('decode location', ()=>{
    const xiami_decode = require('./index').xiami_decode;
    it('case 1', ()=>{
        let data = '9hFlc%12_3F%af915-t%eo26%2_a3c114Ent2.mF751luD5917%upFx%15E%.t232845l%mi23865mh7ef55El35aF597Ep_f98b1-A.m1%%243k6aca3%%fi32244%e5dae252i.5FF293y9cf-%E';
        let expected = 'http://m5.file.xiami.com/135/135/167589/2067242_2104493_l.mp3?auth_key=27f659ac53e9adcf192f8caf91185bae-1474513200-0-null';
        let actual = xiami_decode(data);
        assert.equal(actual, expected);
    });
});

describe('fix windows invalid char', ()=>{
    const fixWinFilename = require('./index').fixWinFilename;
   it('case 1', ()=>{
       let fn = 'a\\/:*?"<> |b.mp3';
       let expected = 'a__________b.mp3';
       let actual = fixWinFilename(fn);
       assert.equal(actual, expected);
   });
});
describe('sizeFormat', ()=>{
    const sizeFormat = require('./index').sizeFormat;
    it('512 Bytes', ()=>{
       assert.equal(sizeFormat(512), '512.0B');
    });
    it('1 KB', ()=>{
       assert.equal(sizeFormat(1024), '1024.0B');
    });
    it('4 KB', ()=>{
       assert.equal(sizeFormat(4096), '4.0KB');
    });
    it('4 MB', ()=>{
       assert.equal(sizeFormat(4*Math.pow(1024,2)), '4.0MB');
    });
    it('4 GB', ()=>{
       assert.equal(sizeFormat(4*Math.pow(1024,3)), '4.0GB');
    });
    it('4 TB', ()=>{
       assert.equal(sizeFormat(4*Math.pow(1024,4)), '4.0TB');
    });
});