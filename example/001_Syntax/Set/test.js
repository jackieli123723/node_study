const assert = require('assert');

describe('ES6 Set', ()=>{
    it('無重複集合, add', ()=>{
        let s = new Set();
        s.add('node');
        s.add('node');
        assert.equal(s.size, 1);
    });
    
    it('無重複集合, 初始化', ()=>{
        let s = new Set(['node', 'node']);
        assert.equal(s.size, 1);
    });
    
    it('has', ()=>{
        let s = new Set();
        s.add('node');
        assert.equal( s.has('node'), true);
        assert.equal( s.has('js'), false);
    });
    
    it('delete', ()=>{
        let s = new Set();
        s.add('node');
        s.delete('node');
        assert.equal( s.has('node'), false);
        assert.equal( s.size, 0);
    });
    
    it('clear', ()=>{
        let s = new Set();
        s.add('node');
        s.clear();
        assert.equal( s.has('node'), false);
        assert.equal( s.size, 0);
    });
    
    
});