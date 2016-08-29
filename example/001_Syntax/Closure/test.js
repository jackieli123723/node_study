function example_1(){
    function numberGenerator() {
      // Local ¡ufree¡v variable that ends up within the closure
      var num = 1;
      function checkNumber() { 
        console.log(num);
      }
      num++;
      return checkNumber;
    }

    var number = numberGenerator();
    number(); // 2
}
    
function example_2(){
    function sayHello() {
      var say = function() { console.log(hello); }
      // Local variable that ends up within the closure 
      var hello = 'Hello, world!';
      return say;
    }
    var sayHelloClosure = sayHello(); 
    sayHelloClosure(); // ¡yHello, world!¡z
}

function main(){
    // example_1();
    example_2();
}
    
main();