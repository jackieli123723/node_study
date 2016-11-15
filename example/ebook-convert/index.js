const
    // {spawn} = require('child_process'),
    {wincmd} = require('D:/github/node_study/example/child_process/index'),
    {EventEmitter} = require('events');

// https://manual.calibre-ebook.com/generated/en/ebook-convert.html
function ebookConvert (options, callback) {
  let args = [module.exports.exe, options.source, options.target]

  if (options.arguments) {
    for (let v of options.arguments) {
      args = args.concat(v);
    }
  }
  return wincmd(args);
}

function md2mobi(src, target, options){
    // convert.exe = "D:/kindle/Calibre Portable/Calibre/ebook-convert.exe";
    options = Object.assign({
        author: ''
    }, options);
    let [evt, epub] = ebookConvert({
      source: src,
      target: target,
      arguments: [
        ['--chapter', '//h:h3'],
        ['--page-breaks-before', '//h:h3'],
        ['--authors', options.author],
        ['--input-encoding', 'utf-8'],
        ['--formatting-type', 'markdown'],
        // '--markdown-extensions',
        ['--txt-in-remove-indents'],
        // ['--base-font-size', '10'], 
        // ['--extra-css', 'test.css']
      ]
    });
    epub.catch(console.error); 
    evt.on('stdout_data', data => console.log(data.toString()));
    evt.on('stderr_data', err => {
        console.log(err.toString());
    });
    evt.on('exit', function(){
      console.log('did it!, the epub exists!')
    });
    // console.log('#');
}
module.exports = {
    ebookConvert,
    md2mobi,
    exe: 'ebook-convert'
};