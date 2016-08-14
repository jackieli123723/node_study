const assert = require('assert'),
      muk = require('muk');
      
// basic
describe('Basic Case', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Timeout', () =>{
    it('timeout', function(done) {
      this.timeout(500);  
      setTimeout(done, 300);
    });
});

// async code
class User {
    constructor(name){
    }
    
    save(done){
        done(null);
    }
}
describe('Async Case', function() {
  describe('#save()', function() {
    it('should save without error', (done)=> {
      var user = new User('Luna');
      user.save(done);
    });
  });
});

describe('Promise Case', function() {
    it('should complete this test',  () =>{
      return new Promise((resolve) => {
            assert.ok(true);
            resolve();
          });
    });
});

describe('mock Test', function() {
    const fs = require('fs');
    before(function(){
        muk(fs, 'readFileSync', function(){
            throw new Error('mock fs test');
        });
    });
    after(function(){
        muk.restore();
    });
    it('test mock fs readFileSync', function(){
        try{
            fs.readFileSync('a', 'utf-8');
        }catch(e){
            assert.ok(true);
            return;
        }
        assert.ok(false);
    });
});

describe('private Test', function() {
    it('test private function', function(){
        const rewire = require('rewire');
        const code = rewire('./src/code');
        const rnd = code.__get__('rnd');
        assert.equal(123, rnd());
    });
});

