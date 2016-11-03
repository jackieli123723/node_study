const 
    smtp = require('../../006_Net/nodemailer-test/index'),
    str = require('../../001_Syntax/String/index'),
    imapEx = require('./index'),
    co = require('../../001_Syntax/Promise/index').co,
    Imap = require('imap'),
    fs = require('fs'),
    repl = require('repl'),
    account = require('./config/account.json'),
    inspect = require('util').inspect;
    
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
function main(){
    let wait = Date.now();
    co(function*(){
        let imap = yield imapEx.openImap({
          user: account.username,
          password: account.password,
          host: account.host,
          port: account.port,
          tls: true,
          debug: info =>{
              // console.log(info);
          }
        });
        
        // let boxes = yield imapEx.getBoxes(imap);
        // showBoxes(boxes);
        
        let box = yield imapEx.openBox(imap);
        
        // console.log(`${str.sizeFormat(quota.usage)}/${quota.percent}%`);
        // imap.search([['UID', '6652']], (err, uids)=>{
            // console.log(uids);
        // });
        
        // imapEx.showMailByUID(imap, '6653');
        
        // let infos = yield imapEx.fetchMailInfo(imap, 6);
        // console.log(infos);
        
        // let f = imap.seq.fetch('6:6', {
          // bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
          // bodies: '',
          // struct: true
        // })
        
        
        // imap.end();
        
        function reset(owner){
            owner.lineParser.reset();
            owner.bufferedCommand = '';
            owner.displayPrompt();
            wait = Date.now();
        }
            
        let r = repl.start({prompt: '>'});
        r.context.mail = {
            subject: 'hello',
            content: 'hello content',
            receiver: ['sisimi.pchome@gmail.com']
        };
        r.context.m = "aaa";
        r.defineCommand('quit', {
          help: 'quit app',
          action: function(name) {
            imap.end();
            process.exit(0);
          }
        });
        
        r.defineCommand('list', {
          help: 'list all mail',
          action: function(name) {
            imapEx.listAllMail(imap).catch( err => {
                console.error(err);
            }).then( ()=>{
                reset(this);
            });
          }
        });
        r.defineCommand('show', {
          help: 'show mail',
          action: function(uid) {
            imapEx.showMailByUID(imap, uid)
                .catch( err => {
                    console.error(err);
                }).then( ()=>{
                    reset(this);
                });
          }
        });
        
        r.defineCommand('del', {
          help: 'delete by uid',
          action: function(uids) {
            // console.log(uids);
            imapEx.deleteMailByUids(imap, uids.split(' '))
                .then( (uids) => {
                    console.log(`${uids} deleted OK`);
                })
                .catch( console.error)
                .then( () => reset(this) );
            
          }
        });
        
        r.defineCommand('export', {
          help: 'export to .eml',
          action: function(uids) {
            // console.log(uid);
            uids = uids.split( ' ');
            let jobs = [];
            for(let uid of uids){
                jobs.push(imapEx.saveEmlByUid(imap, uid));
            }
            
            Promise.all(jobs)
                .then( fns => {
                    for(let fn of fns){
                        console.log(`Export to ${fn}`);
                    }
                })
                .catch( console.error)
                .then( ()=> reset(this) );
          }
        });
        
        r.defineCommand('quota', {
          help: 'show Quota',
          action: function(uids) {
            imapEx.getRootQuota(imap).then(quota => {
                console.log(`${str.sizeFormat(quota.usage)}/${quota.percent}%`);
            }).catch( console.error)
            .then( () => reset(this) );
          }
        });
        
        r.defineCommand('boxes', {
          help: 'list box',
          action: function() {
            imapEx.getBoxes(imap).then(boxes => {
                showBoxes(boxes);
            }).catch( console.error)
            .then( () => reset(this) );
          }
        });
        r.defineCommand('test', {
          help: 'test',
          action: function(v) {
            console.log(r.context.mail);
            console.log(v);
            console.log(arguments);
          }
        });
        r.defineCommand('mail', {
          help: 'send mail',
          action: function() {
              smtp.sendMail({
                'smtp_debug': true,
                'name' : account.smtpHostname,
                'mail_subject' : r.context.mail.subject,
                'mail_content' : r.context.mail.content,
                'mail_receiver' : r.context.mail.receiver,
                'mail_sender' : account.senderMail,
                'mail_sender_name': account.senderName,
                'smtp_uid' : null,
                'smtp_pwd' : null,
                'smtp_server' : account.smtpHost,
                'smtp_port' : account.smtpPort,
                'requireTLS': true,
                'smtp_secure' : false
            }).catch( console.error)
            .then( () => reset(this) );
          }
        });
        
        setInterval( ()=>{
            // console.log(wait);
            // console.log(Date.now() - wait);
            if(Date.now() - wait > 300000){
                imapEx.listAllMail(imap).catch( err => {
                    console.error(err);
                }).then( ()=>{
                    console.log( new Date() );
                    reset(r);
                });
            }
        }, 60000);
    }).catch(console.error);  
    
    
    // 收件夾列表
    function showBoxes(boxes, prefix= ' +'){
        for(let name in boxes){
            console.log(`${prefix} ${name}`);
            let box = boxes[name];
            if(box['children']){
                showBoxes(box['children'], ' ' + prefix);
            }
        }
    }
 
    
    
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
    
}
