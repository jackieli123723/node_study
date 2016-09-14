const
    assert = require('assert'),
    util = require('./index');
    
describe('basic', function(){
    it('new Date(dateString)', ()=>{
        let d = new Date('2009/2/13 23:31:30Z');
        assert.equal(Number(d), 1234567890000);
    });
    
    it('es5.1 : Date.now() - 取得目前的 timestamp ', ()=>{
        let t1 = Date.now();
        let d2 = new Date();
        assert.equal( t1, Number(d2));
    });
    
    it('UTC', ()=>{
        let t = Date.UTC('2009','01','13','23','31','30');
        assert.equal( typeof(t), 'number');
        
        let d = new Date(t);
        assert.equal(d.getUTCFullYear(), 2009);
        assert.equal(d.getUTCMonth(), 1); // 0=1月, 1=2月...
        assert.equal(d.getUTCDate(), 13);
        assert.equal(d.getUTCHours(), 23);
        assert.equal(d.getUTCMinutes(), 31);
        assert.equal(d.getUTCSeconds(), 30);
    });
    
    it('.getTime() 取 timestamp', ()=>{
        let d = new Date(Date.UTC('2009','01','13','23','31','30'));
        assert.equal(d.getTime(), 1234567890000);
        assert.equal(Number(d), 1234567890000);
    });
    it('TimeStamp <-> Date', ()=>{
        let d = new Date();
        let t = Number(d);
        let d2 = new Date(t);
        
        assert.equal(d.getMilliseconds(), d2.getMilliseconds());
        assert.equal(Number(d2), t);
    });
    
    
    it('字串轉 Date', ()=>{
        let utc_date = Date.parse('2016-08-04 07:04:22Z');
        let local_date = Date.parse('2016-08-04 15:04:22'); // +8
        let timezone_date = Date.parse('2016-08-04 15:04:22+8:00'); 
        assert.equal(Number(utc_date), 1470294262000);
        assert.equal(Number(timezone_date), 1470294262000);
        assert.equal(Number(local_date), Number(timezone_date));
    });
    it('時間最小值', ()=>{
        let d2 = new Date(0);
        assert.equal(Number(d2), 0);
    });
    
    it('.format()', ()=>{
        let s = util.format(new Date(2016, 8, 4, 13, 59, 58, 3),"yyyy-MM-dd hh:mm:ss.S");
        assert.equal(s, '2016-09-04 13:59:58.3');
    });
    
    it('明確指定年月日時分秒', ()=>{
        let d1 = new Date(2016, 8, 4, 13, 59, 58, 3);
        
        assert.equal(Number(d1), 1472968798003);
        assert.equal(d1.getFullYear(), 2016);
        assert.equal(d1.getMonth(), 8);
        assert.equal(d1.getDate(), 4);
        assert.equal(d1.getHours(), 13);
        assert.equal(d1.getMinutes(), 59);
        assert.equal(d1.getSeconds(), 58);
        assert.equal(d1.getMilliseconds(), 3);
    });
    
});
function main(){
    // utc to localtime
    console.log( (new Date(Date.parse('2016-08-04 07:04:22Z'))).toLocaleString()	);
    
    util.todayIs();
}
    
if (require.main === module) {
    main();
}