const
    winston = require('winston');
    
winston.add(  winston.transports.File, {filename: 'log.txt'});
// 移除預設 Console 輸出
winston.remove(winston.transports.Console);
  
function main(){
    winston.info('hello world');
    winston.warn('hello world');
    winston.error('hello world');
    winston.log('info', 'hello world');
    winston.log('warn', 'hello world');
    winston.log('error', 'hello world');
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
