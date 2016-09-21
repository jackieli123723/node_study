const
    assert = require('assert');
    
describe('File', ()=>{
    const File = require('./index').File;
    it('exists', function(){
        return File.exists('index.js')
            .then( exists =>{
                assert.equal(exists, true);
            });
    });   
    it('not exists', function(){
        return File.exists('bad.js')
            .then( exists =>{
                assert.equal(exists, false);
            });
    });    
});