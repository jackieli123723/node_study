
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

String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

String.prototype.repeat = function( num ){
    return new Array( num + 1 ).join( this );
};

function es6_string(){
    var str = "Hello world!";
    console.log('str=' + str);
    console.log('str.startsWith("Hello")='+str.startsWith("Hello")); // true
    console.log('str.endsWith("!")='+str.endsWith("!")); // true
    console.log('str.includes("o")='+str.includes("o")); // true

    console.log('str.startsWith("world", 6)='+str.startsWith("world", 6)); // true
    console.log('str.endsWith("Hello", 5)='+str.endsWith("Hello", 5)); // true
    console.log('str.includes("Hello", 6)='+str.includes("Hello", 6)); // false

    console.log('"x".repeat(3)=' + "x".repeat(3)); // "xxx"

    console.log('"hello".repeat(2) = ' + "hello".repeat(2)); // "hellohello"
}


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
    console.log('  123  '.trim());
    console.log('=-'.repeat(20));
    
    es6_string();
    es6_template_string();
}
    
main();
