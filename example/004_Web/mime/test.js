const
    assert = require('assert'),
    mime = require('mime');
    
describe('lookup', function(){
    it('完整檔名', ()=>{
        assert.equal(mime.lookup('/path/to/file.txt'), 'text/plain') ;
    });
    it('只有檔名', ()=>{
        assert.equal(mime.lookup('file.txt'), 'text/plain') ;
    });
    it('副檔名', ()=>{
        assert.equal(mime.lookup('.TXT'), 'text/plain');
    });
    it('副檔名沒有點', ()=>{
        assert.equal(mime.lookup('htm'), 'text/html');
    });
});


