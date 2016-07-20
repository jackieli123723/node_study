// function* 表示是 generator
// 返回用 yield
function *someWords() {
    yield "hello"; // for 1
    yield "world"; // for 2
}

function example_1() {
    console.log('==== example 1 : for .. of ====');
    for (let word of someWords()) {
        console.log(word);
    }
}

function *thing() {
    yield 1;
    yield 2;

    return 3;
}

function example_2() {
    console.log('==== example 2 : next() ====');
    const t = thing();
    console.log(t);
    console.log(t.next()); // { value: 1, done: false }
    console.log(t.next()); // { value: 2, done: false }
    console.log(t.next()); // { value: 3, done: true }
    console.log(t.next()); // { value: undefined, done: true }
}

function *xrange(start, stop) {
    for (var i = start; i < stop; i++) {
        yield i;
    }
}

function example_3() {
    console.log('==== example 3 : xrange ====');
    for (let v of xrange(0, 3)) {
        console.log(v);
    }
}

function example_4() {
    console.log('==== example 4 : filter ====');
    for(let ret of filter( function(v){
        return v% 2 == 0;
    }, xrange(0, 10))){
    
        console.log(ret);
    }
}

function* filter(test, iterable) {  
  for (let item of iterable) {  
    if (test(item))  {
      yield item;  
    }
  }  
}

function* concat(iter1, iter2) {
  yield* iter1;
  yield* iter2;
}


function example_5() {
    console.log('==== example 5 : concat ====');
    for(let ret of concat( ['a','b','c'], [1,2,3])){
        console.log(ret);
    }
}

function* inner(){
    yield* xrange(0, 5);
}


function example_6() {
    console.log('==== example 6 : yield* ====');
    for(let ret of inner()){
        console.log(ret);
    }
}

function* communicate(){
    let go = true,
        i = 1;
    while (true){
        go = yield i++;
        
        if(go === false){
            break;
        }
    }
}

function example_7() {
    console.log('==== example 7 : communicate ====');
    let co = communicate();
    console.log( co.next());
    console.log( co.next());
    console.log( co.next(false));
}


function example_8() {
    console.log('==== example 8 : async task ====');

    function getFirstName() {
        console.log('>>getFirstName');
        setTimeout(function(){
            console.log('>>> Chiu');
            gen.next('Chiu')
        }, 3000);
    }

    function getSecondName() {
        console.log('>>getSecondName');
        setTimeout(function(){
            console.log('>>> Chui-Wen');
            gen.next('Chui-Wen')
        }, 1000);
    }


    function *sayHello() {
        console.log('yield #1');
        var a = yield getFirstName(); // wait for next()
        
        console.log('yield #2');
        var b = yield getSecondName(); // wait for next()
        
        console.log('print result');        
        console.log(a, b); //alex perry
    }
    console.log('create generator');
    var gen = sayHello();
    console.log('start generator');
    gen.next();
}

function main() {
    example_1();
    example_2();
    example_3();
    example_4();
    example_5();
    example_6();
    example_7();
    example_8();
}

main();