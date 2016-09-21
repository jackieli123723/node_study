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

// https://github.com/wolfhong/xiamiclient/blob/master/xiamiclient/client.py
module.exports.xiami_decode = function(location){
    let 
        rows = parseInt(location[0]),
        _str = location.slice(1),
        cols = parseInt(_str.length/rows) + 1,
        full_row = _str.length % rows,
        ch,
        out = "";
        
    for(let c=0;c<cols; ++c){
        for(let r=0;r<rows; ++r){
            if(c == (cols - 1) && r >= full_row){
                continue
            }
            if( r < full_row){
                ch = _str[r*cols+c];
            }else{
                ch = _str[cols*full_row+(r-full_row)*(cols-1)+c];
            }
            out += ch;
        }
    }
    return decodeURIComponent(out).replace(/\^/g, '0');
};
