const convert = require('./index');
function main(){
    convert.exe = "D:/kindle/Calibre Portable/Calibre/ebook-convert.exe";
    // var [evt, epub] = convert.ebookConvert({
      // source: 'D:/sdk/nodejs/002_Code/spider/book/神醫嫡女.txt',
      // target: 'test.mobi',
      // arguments: [
        // ['--chapter', '//h:h3'],
        // ['--page-breaks-before', '//h:h3'],
        // ['--authors', '楊十六'],
        // ['--input-encoding', 'utf-8'],
        // ['--formatting-type', 'markdown'],
        // '--markdown-extensions',
        // ['--txt-in-remove-indents'],
        // ['--base-font-size', '10'], 
        // ['--authors', 'Seth Vincent'],
        // ['--extra-css', 'test.css']
      // ]
    // });
    // epub.catch(console.error);
    // evt.on('stdout_data', data => console.log(data.toString()));
    // epub.on('stderr_data', function(err){
        // console.log(err);
    // });
    // epub.on('end', function(){
      // console.log('did it!, the epub exists!')
    // });
    
    convert.md2mobi(
        'D:/sdk/nodejs/002_Code/spider/book/神醫嫡女.txt',
        'test.mobi',
        {author: '楊十六'}
    );
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
