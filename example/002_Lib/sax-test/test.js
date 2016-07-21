let sax = require('sax'),
    depth = 1;

function test_sax_read(){
    let parser = sax.parser(sax.strict);
    
    parser.ontext = function(t) {
       let tab='';
       if(depth>0){
          tab = Array(depth).join("\t")
       }
       console.log(tab + t.trim());
    };

    parser.onopentag = function(node) {
       //on new tag opened
       let attrs = [];
       for(let k in node.attributes){
            attrs.push( k + '="' + node.attributes[k] + '"' );
       }
       
       let attrs_str = '';
       if(attrs.length > 0){
            attrs_str = ' ' + attrs.join(' ');
       }
       
       let tab='';
       if(depth>0){
          tab = Array(depth).join("\t");
       }   
       console.log(tab + '<' + node.name + attrs_str + '>');
       ++depth;
    };

    parser.onclosetag = function(node) {
       //on new tag opened
       --depth;
       let tab='';
       if(depth>0){
          tab = Array(depth).join("\t")
       }
       console.log(tab + '</' + node + '>');
    };

    parser.write('<xml>Hello, <who name="world">world</who>!</xml>').close();
}
    
function main(){
    test_sax_read();
}
    
main();
