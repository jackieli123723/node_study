
function str_to_number(){
    // 將字符串轉換為16進制的數值
    console.log( `parseInt('AB3', 16)=` + parseInt('AB3', 16));
    // 將字符串轉換為10進制的數值
    console.log(`parseInt('13', 10)=`+parseInt('13', 10) );
    // 將字符串轉換為8進制的數值
    console.log(`parseInt('172', 8) =`+parseInt('172', 8));
    // 將字符串轉換為2進制的數值
    console.log(`parseInt('1010', 2)=`+parseInt('1010', 2));
    console.log(`parseInt('999', 2)=`+parseInt('999', 2));
}
    
function date_to_number(){
    // Date to timetamp
    console.log(`Number(new Date())=`+Number(new Date())); 
}

function test_isSafeInteger(){
    // http://www.w3schools.com/jsref/jsref_issafeinteger.asp
    console.log('== Number.isSafeInteger() ==');
    console.log(`Number.isSafeInteger('a')=`+Number.isSafeInteger('a')); // <- false
    console.log(`Number.isSafeInteger(null)=`+Number.isSafeInteger(null)); // <- false
    console.log(`Number.isSafeInteger(NaN)=`+Number.isSafeInteger(NaN)); // <- false
    console.log(`Number.isSafeInteger(Infinity)=`+Number.isSafeInteger(Infinity)); // <- false
    console.log(`Number.isSafeInteger(-Infinity)=`+Number.isSafeInteger(-Infinity)); // <- false
    console.log(`Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)=`+Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); // <- false
    console.log(`Number.isSafeInteger(Number.MIN_SAFE_INTEGER)=`+Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); // <- true
    console.log(`Number.isSafeInteger(1)=`+Number.isSafeInteger(1)); // <- true
    console.log(`Number.isSafeInteger(1.2)=`+Number.isSafeInteger(1.2)); // <- false
    console.log(`Number.isSafeInteger(Number.MAX_SAFE_INTEGER)=`+Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // <- true
    console.log(`Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)=`+Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // <- false
    console.log(`Number.isSafeInteger(9007199254740000)=`+Number.isSafeInteger(9007199254740000)); // <- true
    console.log(`Number.isSafeInteger(993)=`+Number.isSafeInteger(993)); // <- true
    console.log(`Number.isSafeInteger(9007199254740000 + 993)=`+Number.isSafeInteger(9007199254740000 + 993)); // <- false
        // Number.MAX_SAFE_INTEGER
    console.log('Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1='+(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1)); // <- true
    console.log(`Number.MAX_SAFE_INTEGER === 9007199254740991=`+(Number.MAX_SAFE_INTEGER === 9007199254740991)); // <- true

        // Number.MIN_SAFE_INTEGER
    console.log(`Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER=`+(Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER)); // <- true
    console.log(`Number.MIN_SAFE_INTEGER === -9007199254740991=`+(Number.MIN_SAFE_INTEGER === -9007199254740991)); // <- true

}

function test_isInteger(){
    // http://www.w3schools.com/jsref/jsref_isinteger.asp
    console.log('== Number.isInteger ==');
    console.log(`Number.isInteger(Infinity)=`+Number.isInteger(Infinity)); // <- false
    console.log(`Number.isInteger(-Infinity)=`+Number.isInteger(-Infinity));// <- false
    console.log(`Number.isInteger(NaN)=`+Number.isInteger(NaN));// <- false
    console.log(`Number.isInteger(null)=`+Number.isInteger(null));// <- false
    console.log(`Number.isInteger(0)=`+Number.isInteger(0));// <- true
    console.log(`Number.isInteger(-10)=`+Number.isInteger(-10));// <- true
    console.log(`Number.isInteger(10.3)=`+Number.isInteger(10.3));// <- false

}

function test_toExponential(){
    // http://www.w3schools.com/jsref/jsref_toexponential.asp
    console.log('== toExponential ==');
    console.log(`5.56789.toExponential(3)=`+5.56789.toExponential(3));
    console.log(`5.56789.toExponential()=`+5.56789.toExponential());
    
}

function test_toFixed(){
    
    // http://www.w3schools.com/jsref/jsref_tofixed.asp
    console.log('== toFixed ==');
    console.log(`5.56789.toFixed(2)=`+5.56789.toFixed(2));
    console.log(`5.56789.toFixed()=`+5.56789.toFixed());
    
}

function test_isFinite(){
    // http://www.w3schools.com/jsref/jsref_isfinite_number.asp
    console.log('== Number.isFinite ==');
    console.log(`Number.isFinite(NaN)=`+Number.isFinite(NaN)); // <- false
    console.log(`Number.isFinite(Infinity)=`+Number.isFinite(Infinity)); // <- false
    console.log(`Number.isFinite(-Infinity)=`+Number.isFinite(-Infinity)); // <- false
    console.log(`Number.isFinite(null)=`+Number.isFinite(null)); // <- false
    console.log(`Number.isFinite(0)=`+Number.isFinite(0)); // <- true
}

function test_toPrecision(){
    console.log('== toPrecision ==');
    // http://www.w3schools.com/jsref/jsref_toprecision.asp
    console.log(`13.3714.toPrecision()=`+13.3714.toPrecision());
    console.log(`13.3714.toPrecision(2)=`+13.3714.toPrecision(2));
    console.log(`13.3714.toPrecision(3)=`+13.3714.toPrecision(3));
    console.log(`13.3714.toPrecision(10)=`+13.3714.toPrecision(10));
}

function test_isNaN(){
    // http://www.w3schools.com/jsref/jsref_isnan_number.asp
    console.log('== Number.isNaN() ==');
    console.log(`Number.isNaN(123)=`+Number.isNaN(123)); // <- false, integers are not NaN
    console.log(`Number.isNaN(Infinity)=`+Number.isNaN(Infinity)); // <- false, Infinity is not NaN
    console.log(`Number.isNaN('ponyfoo')=`+Number.isNaN('ponyfoo')); // <- false, 'ponyfoo' is not NaN
    console.log(`Number.isNaN(NaN)=`+Number.isNaN(NaN)); // <- true, NaN is NaN
    console.log(`Number.isNaN('pony'/'foo')=`+Number.isNaN('pony'/'foo')); // <- true, 'pony'/'foo' is NaN, NaN is NaN
}

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
    // 二進位
    console.log(`0b001=`+0b001); // 1
    console.log(`0b010=`+0b010); // 2
    console.log(`0b011=`+0b011); // 3
    console.log(`0b100=`+0b100); // 4
    
    // 八進位
    console.log(`0o010=`+0o010); // 8
    console.log(`0o100=`+0o100); // 64
    // 16進位
    console.log(`0xff=`+0xff); // 255
    console.log(`0x64=`+0x64); // 100
    
    console.log(`123e5=`+123e5);
    console.log(`123e-5=`+123e-5);
    
    console.log('Number.MAX_VALUE='+Number.MAX_VALUE); 
    console.log('Number.MIN_VALUE='+Number.MIN_VALUE); 
    console.log('Number.NEGATIVE_INFINITY='+Number.NEGATIVE_INFINITY); 
    console.log('Number.POSITIVE_INFINITY='+Number.POSITIVE_INFINITY); 
    console.log('Number.EPSILON='+Number.EPSILON); // <- 2.220446049250313e-16, wait what?
    console.log('Number.EPSILON.toFixed(20)='+Number.EPSILON.toFixed(20)); // <- '0.00000000000000022204', got it
    test_toFixed();
    test_toExponential();

    test_isSafeInteger();
    test_isInteger();
    test_isFinite();
    test_isNaN();
    test_toPrecision();
    
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


main();