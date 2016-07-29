
String.prototype.padLeft = function(width, z) {
  return this.pad(width, z, 'left');
};

String.prototype.padRight = function(width, z) {
    return this.pad(width, z, 'right');
};

String.prototype.pad = function(width, z, dir) {
  z = z || ' ';
  dir = dir || 'left';
  if( this.length >= width){
      return this;
  }
  var pad_str = new Array(width - this.length + 1).join(z);
  if(dir == 'right'){
    return pad_str + this;
  }else{
    return this + pad_str;
  }
};

// String.prototype.trim = function () {
    // return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
// };

// String.prototype.repeat = function( num ){
    // return new Array( num + 1 ).join( this );
// };

function es6_template_string(){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
    
    var name='arick'; // ¨Ï¥Î ${name}
    var a=5, b=3;
    var myTooLongString = `A long time ago, in a galaxy far
    far away....${name}, ${a+b}
    It is a period of civil war.
    Rebel spaceships, striking
    from a hidden base, have won
    their first victory against
    the evil Galactic Empire`;
    console.log(myTooLongString);
}

function main(){
    console.log('123'.padLeft(10, '0'));
    console.log('123'.padRight(10, '0'));
    
    // http://www.w3schools.com/jsref/jsref_charat.asp
    console.log('== charAt(index) ==');
    console.log("'123'.charAt(1)=" + '123'.charAt(1));
    
    // http://www.w3schools.com/jsref/jsref_charcodeat.asp
    console.log('== charCodeAt(index) ==');
    console.log("'123'.charCodeAt(1)=" + '123'.charCodeAt(1));
    
    // http://www.w3schools.com/jsref/jsref_tolowercase.asp
    console.log('== toUpperCase() ==');
    console.log('"aBcD".toUpperCase()=' + 'aBcD'.toUpperCase());
    
    // http://www.w3schools.com/jsref/jsref_touppercase.asp
    console.log('== toLowerCase() ==');
    console.log('"aBcD".toLowerCase()=' + 'aBcD'.toLowerCase());
    
    // http://www.w3schools.com/jsref/jsref_substr.asp
    console.log('== substr(start, length) ==');
    console.log('"Hello world!".substr(1, 4)=' + "Hello world!".substr(1, 4));
    console.log('"Hello world!".substr(2)='+"Hello world!".substr(2));
    console.log('"Hello world!".substr(0, 1)=' + "Hello world!".substr(0, 1));
    console.log('"Hello world!".substr(11, 1)=' + "Hello world!".substr(11, 1));
    
    // http://www.w3schools.com/jsref/jsref_substring.asp
    console.log('== substring(start, end) ==');
    console.log('"Hello world!".substring(1, 4)=' + "Hello world!".substring(1, 4));
    console.log('"Hello world!".subsubstringstr(2)='+"Hello world!".substring(2));
    console.log('"Hello world!".substring(0, 1)=' + "Hello world!".substring(0, 1));
    console.log('"Hello world!".substring(11, 1)=' + "Hello world!".substring(11, 1));
    console.log('"Hello world!".substring(-3)=' + "Hello world!".substring(-3));
    
    // http://www.w3schools.com/jsref/jsref_trim_string.asp
    console.log('== trim() ==');
    console.log('->' + '  123  '.trim() +'<-');
    
    // http://www.w3schools.com/jsref/jsref_replace.asp
    console.log('== replace() ==');
    var str = "Mr Blue has a blue house and a blue car";
    console.log( str.replace('blue', "[red]")); // Mr Blue has a [red] house and a blue car
    console.log( str.replace(/blue/g, "[red]")); // Mr Blue has a [red] house and a [red] car
    console.log( str.replace(/blue/gi, "[red]")); // Mr [red] has a [red] house and a [red] car

    // es6
    // http://www.w3schools.com/jsref/jsref_repeat.asp
    console.log('== repeat() ==');
    console.log('"=-".repeat(20)=' + '=-'.repeat(20));
    console.log('"x".repeat(3)=' + "x".repeat(3)); // "xxx"
    console.log('"hello".repeat(2) = ' + "hello".repeat(2)); // "hellohello"
    
    // http://www.w3schools.com/jsref/jsref_slice_string.asp
    console.log('== slice() ==');
    console.log( '"Hello world!".slice(3)=' + "Hello world!".slice(3)); // lo world!
    console.log( '"Hello world!".slice(3,8)=' + "Hello world!".slice(3, 8)); // lo wo
    console.log( '"Hello world!".slice(0,1)=' + "Hello world!".slice(0, 1)); // H
    console.log( '"Hello world!".slice(-1)=' + "Hello world!".slice(-1)); // !
    
    // http://www.w3schools.com/jsref/jsref_split.asp
    console.log('== split() ==');
    console.log('"a,b,c,d".split(",")=' +'a,b,c,d'.split(',')); // [a,b,c,d]
    console.log('"a,b,c,d".split(",",2)=' +'a,b,c,d'.split(',', 2)); // [a,b]
    
    // http://www.w3schools.com/jsref/jsref_indexof.asp
    console.log('== indexOf(searchvalue,start) ==');
    console.log('"Hello world".indexOf("wor")=' + "Hello world".indexOf("wor"));
    console.log('"Hello world".indexOf("wor", 7)=' + "Hello world".indexOf("wor", 7));

    // http://www.w3schools.com/jsref/jsref_indexof.asp
    console.log('== lastIndexOf(searchvalue,start) ==');
    console.log('"Hello world".lastIndexOf("l")=' + "Hello world".lastIndexOf("l"));
    console.log('"Hello world".lastIndexOf("l", 7)=' + "Hello world".lastIndexOf("l", 7));

    // es6
    // [JavaScript String includes() Method](http://www.w3schools.com/jsref/jsref_includes.asp)
    console.log('== includes() ==');
    console.log('"word".includes("o")=' + 'world'.includes("o")); // true
    console.log('"word".includes("O")=' + 'world'.includes("O")); // false
    console.log('"word".includes("a")=' + 'world'.includes("a")); // false
    
    // es6
    // http://www.w3schools.com/jsref/jsref_startswith.asp
    console.log('== startsWith() ==');
    console.log('"hello world".startsWith("world")='+'hello world'.startsWith("world")); // false
    console.log('"hello world".startsWith("world", 6)='+'hello world'.startsWith("world", 6)); // true
    console.log('"hello world".startsWith("world", 3)='+'hello world'.startsWith("world", 3)); // false
    
    // es6
    // http://www.w3schools.com/jsref/jsref_endswith.asp
    console.log('== endsWith() ==');
    console.log('"hello world".endsWith("world")='+'hello world'.endsWith("world")); // true
    console.log('"hello world".endsWith("world", 6)='+'hello world'.endsWith("world", 6)); // false
    console.log('"hello world".endsWith("world", 3)='+'hello world'.endsWith("world", 3)); // false
    
    
    

    
    es6_template_string();
}
    
main();
