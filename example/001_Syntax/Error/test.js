const 
    assert = require('assert'),
    {AppError} = require('./index');
    
describe('AppError', ()=>{
    it('自訂參數', ()=>{
        const err = new AppError({info:{data:123, s:'a'}});
        assert.equal(err.name, 'AppError');
        assert.equal(err.info.data, 123);
    });
    it('自訂錯誤名稱', ()=>{
        const err = new AppError({name: 'MyError'});
        assert.equal(err.name, 'MyError');
    });
    it('字串參數', ()=>{
        const err = new AppError('MyError');
        assert.equal(err.name, 'MyError');
    });
});