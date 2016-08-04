
function es6_classes(){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    
    console.log('== es6 class ==');
    class Person {
        // 建構子
        constructor(name) {
            this.name = name;
        }
        
        // instance method
        describe() {
            return 'Person called ' + this.name;
        }
        
        *random(){
            while(true){
                yield Math.random();
            }
        }
        
        // static property get
        static get Style() {
            console.log('>> static property get');
            return Person.style;
        }
        
        // static property set
        static set Style(val) {
            console.log('>> static property set');
            Person.style = val;
        }
        
        // dynamic method
        ['dynamic' + '_' + 'method']() {
            console.log('dynamic method');
        }
    }
        

    console.log(`typeof Person = ${typeof Person}`);
    let p = new Person('arick');
    console.log(p.describe());
    console.log(p.hasOwnProperty('name'));
    Person.Style = "Superman";
    console.log(Person.Style);
    p.dynamic_method();
    let rnd = p.random();
    console.log(rnd.next());
    console.log(rnd.next());
    console.log('== subclass ==');
    
    // Subclass
    class Employee extends Person {
        constructor(name, title) {
            super(name); 
            this.title = title;
        }
        
        describe() {
            return super.describe() + ' (' + this.title + ')';
        }
        
        // static method
        static sayHello(){
        
        }
        
        // instance property get
        get name(){
          return "arick";
        }
        
        // instance property set
        set name(v){
          console.log('set name:'+v)
        }
    }
    
    let p2 = new Employee('arick', 'CEO');
    console.log(p2.describe());
    
    console.log(`p2 instanceof Employee = ${p2 instanceof Employee}`);
    console.log(`p2 instanceof Person = ${p2 instanceof Person}`);
    console.log(`Object.getPrototypeOf(p2) = ${Person == Object.getPrototypeOf(p2)}`);
    
    console.log('== extends Error ==');
    class MyError extends Error {

    }
    
    try{
        throw new MyError();
    }catch(ex){
        console.log(ex instanceof MyError);
        console.log('catch myerror');
    }

    console.log('== Iterator ==');
    // Class的Generator方法
    class Foo {
        constructor(...args) {        this.args = args;
        }    
        
        * [Symbol.iterator]() {        
            for (let arg of this.args) {
                yield arg;
            }
        }
    } 
    for (let x of new Foo('hello', 'world')) {
        console.log(x);
    }
}

function es4_class(){
    var Student = (function () {
        function Student(firstname, middleinitial, lastname) {
            this.firstname = firstname;
            this.middleinitial = middleinitial;
            this.lastname = lastname;
            this.fullname = firstname + " " + middleinitial + " " + lastname;
        }
        return Student;
    })();
    function greeter(person) {
        return "Hello, " + person.firstname + " " + person.lastname;
    }
    var user = new Student("Jane", "M.", "User");
    console.log(greeter(user));
}

function main(){
    es6_classes();
    es4_class();
    
    // Object.is該方法可以用來判斷兩個值是否一樣，可以判斷NaN與NaN，-0和+0，採用的是等值算法，如下所示
    console.log(`Object.is(NaN,NaN)=`+Object.is(NaN,NaN));
    console.log(`Object.is(+0,-0)=`+Object.is(+0,-0));
    console.log(`Object.is({x:1},{x:1})=`+Object.is({x:1},{x:1}));

    //Object.assign用來合併對象，採用的是淺複製且存在同名屬性後者會覆蓋前者，如下所示
    console.log(`Object.assign({x:1}, {y:2}, {y:3,x:2})=`
        + JSON.stringify(Object.assign({x:1}, {y:2}, {y:3,x:2})));
}
    
main();