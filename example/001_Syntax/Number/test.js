const assert = require('assert');

describe('進位轉換', ()=>{
    it('10 進位轉 2進位', ()=>{
        let n = 10;
        let bin = n.toString(2);
        assert.equal(bin, '1010');
    });
    it('10 進位轉 8進位', ()=>{
        let n = 10;
        let oct = n.toString(8);
        assert.equal(oct, '12');
    });
    
    it('10 進位轉 16進位', ()=>{
        let n = 255;
        let hex = n.toString(16);
        assert.equal(hex, 'ff');
    });
    
    it('16 進位轉 10進位', ()=>{
        let n = parseInt('ff', 16);
        assert.equal( n, 255);
    });
    it('8 進位轉 10進位', ()=>{
        let n = parseInt('12', 8);
        assert.equal( n, 10 );
    });
    it('2 進位轉 10進位', ()=>{
        let n = parseInt('1010', 2);
        assert.equal( n, 10 );
    });
});

describe('字面常數', ()=>{
    it('16進位', ()=>{
        assert.equal(0xff, 255);
    });
    it('8進位', ()=>{
        assert.equal(012, 10);
        assert.equal(0o12, 10);
    });
    it('2進位', ()=>{
        assert.equal(0b1010, 10);
    });
    
    it('科學記號', ()=>{
        assert.equal(123e5, 12300000);
        assert.equal(123e-5, 0.00123);
    });
});


function date_to_number(){
    // Date to timetamp
    console.log(`Number(new Date())=`+Number(new Date())); 
}


describe('Number.prototype', ()=>{
    // http://www.w3schools.com/jsref/jsref_toexponential.asp
    describe('.toExponential()', ()=>{
        it('5.56789.toExponential(3)="5.568e+0"', ()=>{
            assert.equal(5.56789.toExponential(3), '5.568e+0');
        });
        
        it(`不指定精準度 5.56789.toExponential()='5.56789e+0'`, ()=>{
            assert.equal(5.56789.toExponential(), '5.56789e+0');
        });
    });
    // http://www.w3schools.com/jsref/jsref_tofixed.asp
    describe('.toFixed(n)', ()=>{
        it('.toFixed( 2 ) 四捨五入到第2位', ()=>{
            assert.equal(5.56789.toFixed(2), 5.57);
        });
        
        it('.toFixed() 預設值 0', ()=>{
            assert.equal(5.56789.toFixed(), 6);
        });
        it('.toFixed() : n <0, RangeError', ()=>{
            try{
                5.56789.toFixed(-1);
                assert.ok( false );
            }catch(ex){
                assert.equal(ex instanceof RangeError, true);
            }
        });
        it('.toFixed() : n >20, RangeError', ()=>{
            try{
                5.56789.toFixed(21);
                assert.ok( false );
            }catch(ex){
                assert.equal(ex instanceof RangeError, true);
            }
        });
    
    });
    
    // http://www.w3schools.com/jsref/jsref_toprecision.asp
    describe('.toPrecision(n): n=0~21', ()=>{
        it(`n 預設值 全保留`, ()=>{
            assert.equal(13.3714.toPrecision(), 13.3714);
            assert.equal(13.371412345678901234567890, 13.371412345678902);
            assert.equal(13.371412345678901234567890.toPrecision(), 13.371412345678902);
        });
        it(`13.3714.toPrecision(2)=`, ()=>{
            assert.equal(13.3714.toPrecision(2), 13);
        });
        it(`13.3714.toPrecision(3)=13.4`, ()=>{
            assert.equal(13.3717.toPrecision(3), 13.4);
        });
        it(`13.3714.toPrecision(10)=`, ()=>{
            assert.equal(13.3714.toPrecision(10), 13.3714000000);
        });
        it(`n < 0`, ()=>{
            try{
                13.3714.toPrecision(-1);
                assert.ok( false );
            }catch(ex){
                assert.equal(ex instanceof RangeError, true);
            }
        });
        it(`n >21 `, ()=>{
            try{
                13.3714.toPrecision(100);
                assert.ok( false );
            }catch(ex){
                assert.equal(ex instanceof RangeError, true);
            }
        });
    });
});

describe('Number', ()=>{
    // http://www.w3schools.com/jsref/jsref_isfinite_number.asp
    describe('.isFinite()', ()=>{
    
        it('Number.isFinite(NaN) == false', ()=>{
            assert.equal(Number.isFinite(NaN), false);
        });
        it('Number.isFinite(Infinity) == false', ()=>{
            assert.equal(Number.isFinite(Infinity), false);
        });
        it('Number.isFinite(-Infinity) == false', ()=>{
            assert.equal(Number.isFinite(-Infinity), false);
        });
        it('Number.isFinite(null) == false', ()=>{
            assert.equal(Number.isFinite(null), false); 
        });
        it('Number.isFinite(0) == true', ()=>{
            assert.equal(Number.isFinite(0), true); 
        });
    });
    
    // http://www.w3schools.com/jsref/jsref_isnan_number.asp
    describe('Number.isNaN(v)', ()=>{
        it(`.isNaN(123)=`, ()=>{
            assert.equal(Number.isNaN(123), false);
        });
        it(`.isNaN(Infinity)=false`, ()=>{
            assert.equal(Number.isNaN(Infinity), false);
        });
        it(`.isNaN('ponyfoo')=false`, ()=>{
            assert.equal(Number.isNaN('ponyfoo'), false);
        });
        it(`.isNaN(NaN)=true`, ()=>{
            assert.equal(Number.isNaN(NaN), true);
        });
        it(`.isNaN('pony'/'foo')=true`, ()=>{
            assert.equal(Number.isNaN('pony'/'foo'), true);
        });
    });
    
    describe('常數定義', ()=>{
        it(`Number.MIN_SAFE_INTEGER = -Number.MAX_SAFE_INTEGER=`, ()=>{
            assert.equal(Number.MIN_SAFE_INTEGER,-Number.MAX_SAFE_INTEGER);
        });
        it(`Number.MIN_SAFE_INTEGER = -9007199254740991=`, ()=>{
            assert.equal(Number.MIN_SAFE_INTEGER, -9007199254740991);
        })
        it('Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1=', ()=>{
            assert.equal(Number.MAX_SAFE_INTEGER, Math.pow(2, 53) - 1);
        })
        it(`Number.MAX_SAFE_INTEGER = 9007199254740991=`, ()=>{
            assert.equal(Number.MAX_SAFE_INTEGER, 9007199254740991);
        });
        it('.MAX_VALUE=1.7976931348623157e+308', ()=>{ 
            assert.equal(Number.MAX_VALUE, 1.7976931348623157e+308);
        }); 
        it('.MIN_VALUE=5e-324', ()=>{ 
            assert.equal(Number.MIN_VALUE, 5e-324);
        }); 
        it('.NEGATIVE_INFINITY=-Infinity', ()=>{ 
            assert.equal(Number.NEGATIVE_INFINITY,-Infinity);
        }); 
        it('.POSITIVE_INFINITY=Infinity', ()=>{ 
            assert.equal(Number.POSITIVE_INFINITY,Infinity);
        }); 
        it('.EPSILON=2.220446049250313e-16', ()=>{ 
            assert.equal(Number.EPSILON,2.220446049250313e-16);
        }); 
        it('.EPSILON.toFixed(20)=0.00000000000000022204', ()=>{ 
            assert.equal(Number.EPSILON.toFixed(20),0.00000000000000022204);
        }); 
    });
    
        
    // http://www.w3schools.com/jsref/jsref_issafeinteger.asp
    describe('.isSafeInteger(v)', ()=>{
        it(`.isSafeInteger('a')=false`, ()=> {
            assert.equal(Number.isSafeInteger('a'), false);
        });
        it(`.isSafeInteger(null)=false`, ()=> {
            assert.equal(Number.isSafeInteger(null), false);
        });
        it(`.isSafeInteger(NaN)=false`, ()=> {
            assert.equal(Number.isSafeInteger(NaN), false);
        });
        it(`.isSafeInteger(Infinity)=false`, ()=> {
            assert.equal(Number.isSafeInteger(Infinity),false);
        });
        it(`.isSafeInteger(-Infinity)=false`, ()=> {
            assert.equal(Number.isSafeInteger(-Infinity), false);
        });
        it(`.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)=false`, ()=> {
            assert.equal(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1), false);
        });
        it(`.isSafeInteger(1)=true`, ()=> {
            assert.equal(Number.isSafeInteger(1), true);
        });
        it(`.isSafeInteger(1.2)=false`, ()=> {
            assert.equal(Number.isSafeInteger(1.2), false);
        });
        it(`.isSafeInteger(9007199254740000)=true`, ()=> {
            assert.equal(Number.isSafeInteger(9007199254740000), true);
        });
        it(`.isSafeInteger(993)=true`, ()=> {
            assert.equal(Number.isSafeInteger(993), true);
        });
    });

    // http://www.w3schools.com/jsref/jsref_isinteger.asp
    describe('.isInteger(v)', ()=>{
        it(`.isInteger(Infinity)=false`, ()=>{
            assert.equal(Number.isInteger(Infinity), false);
        });
        it(`.isInteger(-Infinity)=false`, ()=>{
            assert.equal(Number.isInteger(-Infinity), false);
        });
        
        it(`.isInteger(NaN)=false`, ()=>{
            assert.equal(Number.isInteger(NaN), false);
        });
        
        it(`.isInteger(null)=false`, ()=>{
            assert.equal(Number.isInteger(null), false);
        });
        
        it(`.isInteger(0)=true`, ()=>{
            assert.equal(Number.isInteger(0), true);
        });
        
        it(`.isInteger(-10)=true`, ()=>{
            assert.equal(Number.isInteger(-10), true);
        });
        
        it(`.isInteger(10.3)=false`, ()=>{
            assert.equal(Number.isInteger(10.3), false);
        });
    });
});

function test_math_exp(){
    console.log('== Math.exp() ==');
    // http://www.w3schools.com/jsref/jsref_exp.asp
    console.log(`Math.exp(1)=`+Math.exp(1));
    console.log(`Math.exp(-1)=`+Math.exp(-1));
    console.log(`Math.exp(5)=`+Math.exp(5));
    console.log(`Math.exp(10)=`+Math.exp(10));
}

function test_math_sqrt(){
    console.log('== Math.sqrt() ==');
    // http://www.w3schools.com/jsref/jsref_sqrt.asp
    console.log(`Math.sqrt(0)=`+Math.sqrt(0));
    console.log(`Math.sqrt(1)=`+Math.sqrt(1));
    console.log(`Math.sqrt(9)=`+Math.sqrt(9));
    console.log(`Math.sqrt(-9)=`+Math.sqrt(-9));
}


function test_math_abs(){
    console.log('== Math.abs() ==');
    // http://www.w3schools.com/jsref/jsref_abs.asp
    console.log(`Math.abs(-7.25)=`+Math.abs(-7.25)); 
    console.log(`Math.abs(7.25)=`+Math.abs(7.25)); 
    console.log(`Math.abs(null)=`+Math.abs(null)); 
    console.log(`Math.abs("Hello")=`+Math.abs("Hello")); 
}

function test_math_ceil(){
    console.log('== Math.ceil() ==');
    // http://www.w3schools.com/jsref/jsref_ceil.asp
    console.log(`Math.ceil(1.4)=`+Math.ceil(1.4));
    console.log(`Math.ceil(0.60)=`+Math.ceil(0.60));
    console.log(`Math.ceil(0.40)=`+Math.ceil(0.40));
    console.log(`Math.ceil(5)=`+Math.ceil(5));
    console.log(`Math.ceil(5.1)=`+Math.ceil(5.1));
    console.log(`Math.ceil(-5.1)=`+Math.ceil(-5.1));
    console.log(`Math.ceil(-5.9)=`+Math.ceil(-5.9));
}

function test_math_floor(){
    console.log('== Math.floor() ==');
    // http://www.w3schools.com/jsref/jsref_floor.asp
    console.log(`Math.floor(1.4)=`+Math.floor(1.4));
    console.log(`Math.floor(0.60)=`+Math.floor(0.60));
    console.log(`Math.floor(0.40)=`+Math.floor(0.40));
    console.log(`Math.floor(5)=`+Math.floor(5));
    console.log(`Math.floor(5.1)=`+Math.floor(5.1));
    console.log(`Math.floor(-5.1)=`+Math.floor(-5.1));
    console.log(`Math.floor(-5.9)=`+Math.floor(-5.9));
}

function test_math_round(){
    console.log('== Math.round() ==');
    // http://www.w3schools.com/jsref/jsref_round.asp
    console.log(`Math.round(1.4)=`+Math.round(1.4));
    console.log(`Math.round(0.60)=`+Math.round(0.60));
    console.log(`Math.round(0.40)=`+Math.round(0.40));
    console.log(`Math.round(5)=`+Math.round(5));
    console.log(`Math.round(5.1)=`+Math.round(5.1));
    console.log(`Math.round(-5.1)=`+Math.round(-5.1));
    console.log(`Math.round(-5.9)=`+Math.round(-5.9));
}

function test_math_log(){
    console.log('== Math.log() ==');
    // http://www.w3schools.com/jsref/jsref_log.asp
    console.log( `Math.log(2)=`+Math.log(2));
    console.log( `Math.log(2.7183)=`+Math.log(2.7183));
    console.log( `Math.log(1)=`+Math.log(1));
    console.log( `Math.log(0)=`+Math.log(0));
    console.log( `Math.log(-1)=`+Math.log(-1));
    console.log( `Math.log2(4)=`+Math.log2(4));
    console.log( `Math.log10(100)=`+Math.log10(100));
}

function test_math_pow(){
    console.log('== Math.pow() ==');
    // http://www.w3schools.com/jsref/jsref_pow.asp
    console.log(`Math.pow(4, 3)=`+Math.pow(4, 3));
    console.log(`Math.pow(0, 1)=`+Math.pow(0, 1));
    console.log(`Math.pow(1, 1)=`+Math.pow(1, 1));
    console.log(`Math.pow(1, 10)=`+Math.pow(1, 10));
    console.log(`Math.pow(3, 3)=`+Math.pow(3, 3));
    console.log(`Math.pow(-3, 3)=`+Math.pow(-3, 3));
    console.log(`Math.pow(2, 4)=`+Math.pow(2, 4));
}
    
function test_math_max_min(){
    
    console.log('== Math.max() ==');
    // http://www.w3schools.com/jsref/jsref_max.asp
    console.log(`Math.max(5, 10)=`+Math.max(5, 10));
    console.log(`Math.max(0, 150, 30, 20, 38)=`+Math.max(0, 150, 30, 20, 38));
    
    console.log('== Math.min() ==');
    // http://www.w3schools.com/jsref/jsref_min.asp
    console.log(`Math.min(5, 10)=`+Math.min(5, 10));
    console.log(`Math.min(0, 150, 30, 20, 38)=`+Math.min(0, 150, 30, 20, 38));
}

function test_trigonometric(){
    
    console.log('== Math.sinh ==');
    console.log(`Math.sinh(0)=`+Math.sinh(0)); 
    console.log(`Math.sinh(1)=`+Math.sinh(1)); 
    
    console.log('== Math.cosh ==');
    console.log(`Math.cosh(1)=`+Math.cosh(1)); 
    console.log(`Math.cosh(0)=`+Math.cosh(0)); 
    console.log(`Math.cosh(-1)=`+Math.cosh(-1)); 
    
    console.log('== Math.tanh ==')
    console.log(`Math.tanh(0)=`+Math.tanh(0)); 
    console.log(`Math.tanh(Infinity)=`+Math.tanh(Infinity)); 
    console.log(`Math.tanh(1)=`+Math.tanh(1)); 
    
    console.log('== Math.asinh ==')
    console.log(`Math.asinh(1)=`+Math.asinh(1)); 
    console.log(`Math.asinh(0)=`+Math.asinh(0)); 
    
    console.log('== Math.acosh ==')
    console.log(`Math.acosh(3)=`+Math.acosh(3)); // 1.762747174039086
    console.log(`Math.acosh(-1)=`+Math.acosh(-1)); 
    console.log(`Math.acosh(0)=`+Math.acosh(0)); 
    console.log(`Math.acosh(0.5)=`+Math.acosh(0.5)); 
    console.log(`Math.acosh(1)=`+Math.acosh(1)); 
    console.log(`Math.acosh(2)=`+Math.acosh(2)); 
    
    console.log('== Math.atanh ==')
    console.log(`Math.atanh(-2)=`+Math.atanh(-2)); 
    console.log(`Math.atanh(-1)=`+Math.atanh(-1)); 
    console.log(`Math.atanh(0)=`+Math.atanh(0)); 
    console.log(`Math.atanh(0.5)=`+Math.atanh(0.5)); 
    console.log(`Math.atanh(1)=`+Math.atanh(1)); 
    console.log(`Math.atanh(2)=`+Math.atanh(2)); 
    
    console.log('== Math.acos ==')
    console.log(`Math.acos(0.5)=`+Math.acos(0.5)); 
    
    console.log('== Math.asin ==')
    console.log(`Math.asin(0.5)=`+Math.asin(0.5)); 
    
    console.log('== Math.atan ==')
    console.log(`Math.atan(2)=`+Math.atan(2)); 
    
    console.log('== Math.atan2 ==')
    console.log(`Math.atan2(8, 4)=`+Math.atan2(8, 4)); 
    
    console.log('== Math.cos ==')
    console.log(`Math.cos(3)=`+Math.cos(3)); 
    console.log(`Math.cos(Math.PI)=`+Math.cos(Math.PI)); 
    console.log(`Math.cos(2 * Math.PI)=`+Math.cos(2 * Math.PI)); 
    
    console.log('== Math.sin ==')
    console.log(`Math.sin(3)=`+Math.sin(3)); 
    console.log(`Math.sin(-3)=`+Math.sin(-3)); 
    console.log(`Math.sin(0)=`+Math.sin(0)); 
    console.log(`Math.sin(Math.PI)=`+Math.sin(Math.PI)); 
    console.log(`Math.sin(Math.PI/2)=`+Math.sin(Math.PI/2)); 
    console.log(`Math.sin(90)=`+Math.sin(90)); 
    console.log(`Math.sin(-90)=`+Math.sin(-90)); 
    console.log(`Math.sin(45)=`+Math.sin(45)); 
    console.log(`Math.sin(60)=`+Math.sin(60)); 
}

function test_math_sign(){
    console.log('== Math.sign ==');
    //Math.sign返回數字的符號，結果為1、-1或0
    console.log(`Math.sign(5)=`+Math.sign(5));//1
    console.log(`Math.sign(-9)=`+Math.sign(-9))//-1
}

function test_math_clz32(){
    console.log('== Math.clz32 ==');
    console.log(`Math.clz32(1)=`+Math.clz32(1));
    console.log(`Math.clz32(1000)=`+Math.clz32(1000));
    console.log(`Math.clz32()=`+Math.clz32());
    console.log(`Math.clz32(true)=`+Math.clz32(true));
    console.log(`Math.clz32(3.5)=`+Math.clz32(3.5));
}

function test_math_fround(){
    console.log('== Math.fround ==');
    console.log(`Math.fround(0)=`+Math.fround(0));
    console.log(`Math.fround(1)=`+Math.fround(1));
    console.log(`Math.fround(1.5)=`+Math.fround(1.5));
    console.log(`Math.fround(1.337)=`+Math.fround(1.337));
    console.log(`Math.fround(NaN)=`+Math.fround(NaN));
}

function test_math_cbrt(){
    console.log('== Math.cbrt ==');
    //Math.cbrt返回數字的立方根
    console.log(`Math.cbrt(64)=`+Math.cbrt(64));//4
}

function test_math_trunc(){
    console.log('== Math.trunc ==');
    //Math.trunc 返回無小數位的數字
    console.log(`Math.trunc(5.9)=`+Math.trunc(5.9));//5
    console.log(`Math.trunc(6.8908)=`+Math.trunc(6.8908));//6
}

function test_math_hypot(){
    // 計算直角三角形斜邊
    console.log('== Math.hypot ==');
    console.log(`Math.hypot(3, 4)=`+Math.hypot(3, 4)); // 5
}

function test_math_imul(){
    // 用以計算x的y次冪
    console.log('== Math.imul ==');
    console.log(`Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2)=`+Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2)); // 2
    }

function test_math_random(){
    console.log('== Math.random() ==');
    // http://www.w3schools.com/jsref/jsref_random.asp
    console.log(`Math.random()=`+Math.random());
    console.log(`Math.floor((Math.random() * 10) + 1)=`+Math.floor((Math.random() * 10) + 1));
}

function main(){


    
    console.log(`Math.E=`+Math.E);
    console.log(`Math.LN2=`+Math.LN2);
    console.log(`Math.LN10=`+Math.LN10);
    console.log(`Math.LOG2E=`+Math.LOG2E);
    console.log(`Math.LOG10E=`+Math.LOG10E);
    console.log(`Math.PI=`+Math.PI);
    console.log(`Math.SQRT1_2=`+Math.SQRT1_2);
    console.log(`Math.SQRT2=`+Math.SQRT2);
    test_math_hypot();
    test_math_imul();
    test_math_fround();
    test_math_trunc();
    test_math_clz32();
    test_math_sign();
    test_math_max_min();
    
    test_math_cbrt();
    test_trigonometric();
    test_math_abs();
    
    test_math_ceil();
    test_math_floor();
    test_math_round();
    
    test_math_log();
    test_math_exp();

    test_math_sqrt();
    test_math_pow();
    
    test_math_random();
}


// main();