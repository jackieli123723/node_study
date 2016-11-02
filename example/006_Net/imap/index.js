const
    str = require('../../001_Syntax/String/index'),
    MailParser = require("mailparser").MailParser,
    fs = require('fs'),
    Imap = require('imap');

function openImap(cfg){
    cfg = Object.assign({}, {
        user: 'guest',
        password: '1234',
        host: 'test.imap.com',
        port: 993,
        tls: true
    }, cfg);
    return new Promise( (y,n)=>{
        let imap = new Imap(cfg);
        imap.once('error', function(err) {
            n(err);
        });
        imap.once('ready', function() {
            y(imap);
        });

        imap.connect();
    });
}

function getBoxes(imap){
    return new Promise( (y,n) =>{
        imap.getBoxes( (err, boxes) => {
            if(err){
                n(err);
                return;
            }
            y(boxes);
        });
    });
}

function openBox(imap, cfg){
    cfg = Object.assign({}, {
        mailboxName: 'INBOX',
        openReadOnly: false,
        modifiers: ''
    }, cfg);

    return new Promise( (y,n)=>{
        imap.openBox(cfg.mailboxName, cfg.openReadOnly, (err,box)=>{
            if(err){
                n(err);
                return;
            }

            y(box);
        });
    });
}

function getMailInfo(msg){
    let infos = {};
    return new Promise( (y,n) => {
        msg.on('body', (stream, info) => {
            infos.info = info;
            let list = [];
            stream.on('error', function(err) {
                n(err);
            });

            stream.on('data', function(chunk) {
                list.push(chunk);
            });
            stream.once('end', function() {
                infos.raw = Buffer.concat(list);
                let body = infos.raw.toString('utf-8');
                let mailparser = new MailParser();
                const inspect = require('util').inspect;
                mailparser.on("end", function(mail_object){
                    infos.mail = mail_object;
                    y( infos );
                });
                mailparser.write(body);
                mailparser.end();

            });
        });

        msg.once('attributes', function(attrs) {
            // console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            infos.attrs = attrs;
        });

        msg.once('end', function() {
            // console.log(prefix + 'Finished');
            // y( infos );
        });
    });
}

function deleteMailByUids(imap, uids){
    return new Promise( (y,n) => {
        imap.setFlags(uids, 'Deleted', err=>{
            if(err){
                n(err);
                return;
            }
            
            imap.expunge(uids, err=>{
                if(err){
                    n(err);
                    return;
                }
                
                y(uids);
            });
        });
    });
}

function showMailByUID(imap, uid){
    return new Promise( (y,n) =>{
        let f = imap.fetch(uid, {
            bodies: '',
            struct: true
        });

        f.once('message', (msg, seqno) => {
            // console.log(seqno);
            // console.log(msg);
            getMailInfo(msg).then( info => {
                console.log(info.mail.headers.subject);
                console.log(info.mail.text);
                // console.log(info);
                y(info);
                // console.log(/charset=(.*?)\r\n/.exec(info.body));
                // console.log(/Content\-Transfer\-Encoding:\s+(.*?)\r\n/.exec(info.body));
                // console.log(Buffer.from(info.body.split('\r\n\r\n')[1], 'base64').toString('utf-8'));
            });
        });
        f.on('error', n);
    });
}

function saveEmlByUid(imap, uid){
    return new Promise( (y,n) => {
        let f = imap.fetch(uid, {
            bodies: '',
            struct: true
        });
        f.once('message', (msg, seqno) => {
            getMailInfo(msg).then( info => {
                let fn = str.fixWinFilename(info.mail.headers.subject);
                fn = `${info.attrs.uid}-${fn}.eml`;
                // console.log(info.mail.headers.subject);
                // console.log(info.mail.text);
                // console.log(fn);
                fs.writeFile(fn, info.raw, err => {
                    if(err){
                        n(err);
                        return;
                    }
                    y(fn);
                });
            });
        });

    });

}

function fetchMailInfo(imap, mid){
    let search = `${mid}:${mid}`;

    return new Promise( (y,n) => {
        let f = imap.seq.fetch(search, {
          bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
          struct: true
        });

        f.once('message', (msg, seqno) => {
            getMailInfo(msg).then( y ).catch(n);
        });

        f.once('error', err => {
            n(err);
        });
    });
}

function listAllMail(imap){
    return new Promise( (y,n) => {
        let f = imap.seq.fetch('1:*', {
          bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
          struct: true
        });
        
        let jobs = [];
        f.on('message', (msg, seqno) => {
             jobs.push(getMailInfo(msg).then( infos => {
                 // console.log(infos);
                 // let header = infos.header;
                 console.log(`${str.pad(seqno + '',3)}-${str.pad(infos.attrs.uid + '',5)}-[${infos.mail.headers.subject}]`);
             }));
        });
        
        f.on('error', n);
        f.on('end', ()=>{
            y( Promise.all( jobs ));
        });
    });
}

function getRootQuota(imap){
    return new Promise( (y,n) =>{
        imap.getQuotaRoot( 'INBOX', (err, info)=>{
            if(err){
                n(err);
                return;
            }

            y({
                usage: info.userQuota.storage.usage * 1024,
                limit: info.userQuota.storage.limit,
                percent : (info.userQuota.storage.usage*1024*100.0/info.userQuota.storage.limit).toFixed(2)
            });
        });
    });
}

module.exports = {showMailByUID, openImap, getBoxes, openBox, saveEmlByUid, getMailInfo, listAllMail, fetchMailInfo, getRootQuota, deleteMailByUids};