const assert = require('assert');

describe('Map class', ()=>{
    it('字串key', ()=>{
        let m = new Map();
        m.set('a', 'a-val');
        assert.equal(m.get('a'), 'a-val');
    });
    it('數值 key', ()=>{
        let m = new Map();
        m.set(100, 'a-val');
        assert.equal(m.get(100), 'a-val');
    });
    it('NaN key', ()=>{
        let m = new Map();
        m.set(NaN, 'a-val');
        assert.equal(m.get(NaN), 'a-val');
    });
    it('物件 key', ()=>{
        let m = new Map();
        let obj = {};
        m.set(obj, 'a-val');
        assert.equal(m.get(obj), 'a-val');
    });
    it('delete', ()=>{
        let m = new Map();
        m.set('a', 'a-val');
        m.delete('a');
        assert.equal(m.get('a'), undefined);
        assert.equal(m.has('a'), false);
        assert.equal(m.size, 0);
    });
    it('clear', ()=>{
        let m = new Map();
        m.set('a', 'a-val');
        m.set('b', 'a-val');
        assert.equal(m.size, 2);
        
        m.clear();
        assert.equal(m.size, 0);
    });
});