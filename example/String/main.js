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

console.log('123'.padLeft(10, '0'));
console.log('123'.padRight(10, '0'));
console.log('  123  '.trim());