const 
    assert = require('assert'),
    {AppError} = require('./index');
    
describe('AppError', ()=>{
    it('自訂參數', ()=>{
        const err = new AppError('test', {data:123, s:'a'});
        assert.equal(err.name, 'AppError');
        assert.equal(err.info.data, 123);
    })
});