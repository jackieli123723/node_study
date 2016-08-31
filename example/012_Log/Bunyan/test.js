const
    path = require('path'),
    bunyan = require('bunyan');
    
let logger = bunyan.createLogger({
    name: 'test',
    streams: [{ // 儲存在檔案, 沒指定直接輸出在 console
        path: path.join(__dirname, 'log.txt'),
        type: 'rotating-file', // 循環式
        period: '1d', // 每天一次
        count: 7 // 做多紀錄7次
    }]
});
function main(){
    logger.info('hello world');
    logger.warn('hello world');
    logger.debug('hello world');
    logger.error('hello world');
    logger.fatal('hello world');
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
