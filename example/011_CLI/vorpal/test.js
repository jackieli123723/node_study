const
    vorpal = require('vorpal')();
    
function main(){
    vorpal
      .command('foo', 'Outputs "bar"')
      .action(function(args, callback) {
        this.log('bar');
        callback();
      });

    vorpal
      .delimiter('>')
      .show();
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
