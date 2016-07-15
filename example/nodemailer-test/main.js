// https://github.com/nodemailer/nodemailer
let nodemailer = require("nodemailer"),
    extend = require("extend");
    
function sendMail(args){
    args = args || {};
    args = extend(false, {
        'smtp_debug' : false,
        'smtp_server' : 'smtp.pchome.com.tw',
        'smtp_port' : 25,
        'smtp_secure' : false,
        'smtp_uid' : 'test',
        'smtp_pwd' : '1234',
        'mail_is_html' : true,
        'mail_charset' : 'UTF-8',
        'mail_sender' : 'test@example.com',
        'mail_sender_name' : 'NoName',
        'mail_subject' : 'Untitle', //信的標題
        'mail_content' : 'hello world',  //發信主體內容4
        'mail_receiver' : [],  //收件人地址
        'mail_attachment' : []  //附件
    }, args);
    
    let transport = nodemailer.createTransport({
      debug : args['smtp_debug'] === true,
      logger : args['smtp_debug'] === true,
      host: args['smtp_server'],
      post: args['smtp_port'],
      secure: args['smtp_secure'],
      auth:{
        user:args['smtp_uid'],
        pass:args['smtp_pwd']
      }
    });
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
    transport.sendMail(cfg, function(err,response){
        if (err){
          console.log(err);
        }else{
          console.log(response);
        }
    });
}

sendMail({
    'smtp_debug': true,
    'mail_subject' : 'hello phpmailer',
    'mail_content' : '<h1> hello phpmailer  </h1>',
    'mail_receiver' :['test@grr.la']
});