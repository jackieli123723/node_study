const smtp = require('./index');

function main(){
    // smtp.sendMail({
        // 'smtp_server' : '127.0.0.1',
        // 'smtp_port' : 25,
        // 'smtp_debug': true,
        // 'mail_subject' : 'hello phpmailer',
        // 'mail_content' : '<h1> hello phpmailer  </h1>',
        // 'mail_receiver' :['test@grr.la'],
        
    // });
    
    // qq
    smtp.sendMail({
        'smtp_server' : 'smtp.qq.com',
        'smtp_port' : 465,
        'smtp_secure': true, //SSL
        'smtp_debug': true,
        'smtp_uid' : '978820441@qq.com',
        'smtp_pwd' : 'aslan651230',
        'mail_sender' : '978820441@qq.com',
        'mail_subject' : 'hello phpmailer',
        'mail_content' : '<h1> hello phpmailer  </h1>',
        'mail_receiver' :['test@grr.la'],
        
    }).catch(console.error);

}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
