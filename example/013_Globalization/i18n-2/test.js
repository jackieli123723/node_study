const 
    I18N = require('i18n-2');
let i18n = new I18N({
    'locales': ['en', 'zh-tw']
});
function main(){
    i18n.setLocale('zh-tw');
    console.log(i18n.__('Hello'));
    
    i18n.setLocale('en');
    console.log(i18n.__('Hello'));
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
