const nodemailer = require("nodemailer");

function sendMail(args){
    args = Object.assign({}, {
        'smtp_debug' : false,
        'smtp_server' : 'smtp.pchome.com.tw',
        'smtp_port' : 25,
        'smtp_secure' : false,
        'smtp_uid' : 'test',
        'smtp_pwd' : '1234',
        'requireTLS' : false,
        'mail_is_html' : true,
        'mail_charset' : 'UTF-8',
        'mail_sender' : 'test@example.com',
        'mail_sender_name' : 'NoName',
        'mail_subject' : 'Untitle', //信的標題
        'mail_content' : 'hello world',  //發信主體內容4
        'mail_receiver' : [],  //收件人地址
        'mail_attachment' : []  //附件
    }, args);
    
    // console.log(args);
    let transfer_cfg = {
      debug : args['smtp_debug'] === true,
      logger : args['smtp_debug'] === true,
      host: args['smtp_server'],
      port: args['smtp_port'],      
      secure: args['smtp_secure'],
      requireTLS: args['requireTLS']
    }
    if(args['name']){
        transfer_cfg.name = args['name'];
    }
    if(args['smtp_uid'] && args['smtp_pwd']){
        transfer_cfg.auth = {
            user:args['smtp_uid'],
            pass:args['smtp_pwd']
          };
    }
    let transport = nodemailer.createTransport(transfer_cfg);
    // console.log(transport);
    let cfg = {
        from:`"${args['mail_sender_name']}" <${args['mail_sender']}>`,
        to: args['mail_receiver'].join(';'),
        subject: args['mail_subject'],
        encoding: args['mail_charset']
    };
    if(args['mail_is_html'] === true){
        cfg['html'] = args['mail_content'];
    }else{
        cfg['text'] = args['mail_content'];
    }
    if(Array.isArray(args['mail_attachment'])){
        cfg['attachments'] = args['mail_attachment'];
    }
    return new Promise( (y,n)=>{
        transport.sendMail(cfg, (err, resp)=>{
            if (err){
                n(err);
                return;
            }
            
            y(resp);
        });
    })
}

module.exports = {sendMail};