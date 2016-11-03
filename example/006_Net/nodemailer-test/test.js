const smtp = require('./index');

function main(){
    smtp.sendMail({
        'smtp_debug': true,
        'mail_subject' : 'hello phpmailer',
        'mail_content' : '<h1> hello phpmailer  </h1>',
        'mail_receiver' :['test@grr.la']
    });

}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
