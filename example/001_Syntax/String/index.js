// php explode
// http://stackoverflow.com/questions/4514323/javascript-equivalent-to-php-explode
module.exports.explode = function(s, separator, limit){
    var arr = s.split(separator);
    if (limit) arr.push( arr.splice(limit-1).join(separator) );
    return arr;
};

module.exports.reverse = function(s) {
    return s.split('').reverse().join('');
};

module.exports.encodeHTML = function (s) {
    return s.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
};
  
module.exports.decodeHTML = function (s) {
    return s.replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&amp;/g, '&');
};

// es5.1 ¤ä´©
module.exports.trim = function (s) {
    return s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
// es6 ¤ä´©
module.exports.repeat = function( s, num ){
    return new Array( num + 1 ).join( s );
};

module.exports.pad = function(s, width, z, dir) {
  z = z || ' ';
  dir = dir || 'left';
  if( s.length >= width){
      return s;
  }
  
  var pad_str = new Array(width - s.length + 1).join(z);
  if(dir == 'left'){
    return pad_str + s;
  }else{
    return s + pad_str;
  }
};
