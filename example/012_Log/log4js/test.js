const 
    log4js = require('log4js');
    
log4js.configure({
  "appenders":
      [
        {"type": "console"},
        {
          "category":"console",
          "type": "dateFile",
          "filename": "logs/logInfo",
          "alwaysIncludePattern": true,
          "pattern": "_yyyy-MM-dd_hh.log" //根據 年月日小時 生成文件，如果是精確到小時，就是每小時生成
        }
      ],
  "replaceConsole": true,
  "levels":
  {
    "console":"ALL"
  }
});



function main(){
    let logger = log4js.getLogger('console');
    logger.setLevel(log4js.levels.INFO);

    logger.trace('Entering cheese testing');
    logger.debug('Got cheese.');
    logger.info('Cheese is Gouda.');
    logger.warn('Cheese is quite smelly.');
    logger.error('Cheese is too ripe!');
    logger.fatal('Cheese was breeding ground for listeria.');
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
