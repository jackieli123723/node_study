
function es6_classes(){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    class Person {
        constructor(name) {
            this.name = name;
        }
        describe() {
            return 'Person called ' + this.name;
        }
    }
        
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
        
        // property
        get name(){
          return "arick";
        }
        
        set name(v){
          console.log('set name:'+v)
        }
    }

    class MyError extends Error {

    }
    var p = new Person('arick');
    console.log(p.describe());

    var p2 = new Employee('arick', 'CEO');
    console.log(p2.describe());
    try{
        throw new MyError();
    }catch(ex){
        console.log('catch myerror');
    }


    // ClassªºGenerator¤èªk
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
}
    
main();