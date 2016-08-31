const
    path = require('path'),
    bunyan = require('bunyan');
    
let logger = bunyan.createLogger({
    name: 'test',
    streams: [{ // �x�s�b�ɮ�, �S���w������X�b console
        path: path.join(__dirname, 'log.txt'),
        type: 'rotating-file', // �`����
        period: '1d', // �C�Ѥ@��
        count: 7 // ���h����7��
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
