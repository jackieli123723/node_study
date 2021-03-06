/**
 * WHOIS Client
 *
 */

var WHOIS_SERVER = {
    'ac': 'whois.nic.ac',
    'ae': 'whois.nic.ae',
    'af': 'whois.nic.af',
    'ag': 'whois.nic.ag',
    'al': 'whois.ripe.net',
    'am': 'whois.amnic.net',
    'as': 'whois.nic.as',
    'at': 'whois.nic.at',
    'au': 'whois.aunic.net',
    'az': 'whois.ripe.net',
    'ba': 'whois.ripe.net',
    'be': 'whois.dns.be',
    'bg': 'whois.register.bg',
    'bi': 'whois.nic.bi',
    'biz': 'whois.neulevel.biz',
    'bj': 'www.nic.bj',
    'br': 'whois.nic.br',
    'bt': 'whois.netnames.net',
    'by': 'whois.ripe.net',
    'bz': 'whois.belizenic.bz',
    'ca': 'whois.cira.ca',
    'cc': 'whois.nic.cc',
    'cd': 'whois.nic.cd',
    'ch': 'whois.nic.ch',
    'ck': 'whois.nic.ck',
    'cl': 'nic.cl',
    'cn': 'whois.cnnic.net.cn',
    'co.nl': 'whois.co.nl',
    'com': 'whois.verisign-grs.com',
    'coop': 'whois.nic.coop',
    'cx': 'whois.nic.cx',
    'cy': 'whois.ripe.net',
    'cz': 'whois.nic.cz',
    'de': 'whois.denic.de',
    'dk': 'whois.dk-hostmaster.dk',
    'dm': 'whois.nic.cx',
    'dz': 'whois.ripe.net',
    'edu': 'whois.educause.net',
    'ee': 'whois.eenet.ee',
    'eg': 'whois.ripe.net',
    'es': 'whois.ripe.net',
    'eu': 'whois.eu',
    'fi': 'whois.ficora.fi',
    'fo': 'whois.ripe.net',
    'fr': 'whois.nic.fr',
    'gb': 'whois.ripe.net',
    'ge': 'whois.ripe.net',
    'gl': 'whois.ripe.net',
    'gm': 'whois.ripe.net',
    'gov': 'whois.nic.gov',
    'gr': 'whois.ripe.net',
    'gs': 'whois.adamsnames.tc',
    'hk': 'whois.hknic.net.hk',
    'hm': 'whois.registry.hm',
    'hn': 'whois2.afilias-grs.net',
    'hr': 'whois.ripe.net',
    'hu': 'whois.ripe.net',
    'ie': 'whois.domainregistry.ie',
    'il': 'whois.isoc.org.il',
    'in': 'whois.inregistry.net',
    'info': 'whois.afilias.info',
    'int': 'whois.isi.edu',
    'iq': 'vrx.net',
    'ir': 'whois.nic.ir',
    'is': 'whois.isnic.is',
    'it': 'whois.nic.it',
    'je': 'whois.je',
    'jp': 'whois.jprs.jp',
    'kg': 'whois.domain.kg',
    'kr': 'whois.nic.or.kr',
    'la': 'whois2.afilias-grs.net',
    'li': 'whois.nic.li',
    'lt': 'whois.domreg.lt',
    'lu': 'whois.restena.lu',
    'lv': 'whois.nic.lv',
    'ly': 'whois.lydomains.com',
    'ma': 'whois.iam.net.ma',
    'mc': 'whois.ripe.net',
    'md': 'whois.nic.md',
    'me': 'whois.nic.me',
    'mil': 'whois.nic.mil',
    'mk': 'whois.ripe.net',
    'mobi': 'whois.dotmobiregistry.net',
    'ms': 'whois.nic.ms',
    'mt': 'whois.ripe.net',
    'mu': 'whois.nic.mu',
    'mx': 'whois.nic.mx',
    'my': 'whois.mynic.net.my',
    'name': 'whois.nic.name',
    'net': 'whois.verisign-grs.com',
    'nf': 'whois.nic.cx',
    'nl': 'whois.domain-registry.nl',
    'no': 'whois.norid.no',
    'nu': 'whois.nic.nu',
    'nz': 'whois.srs.net.nz',
    'org': 'whois.pir.org',
    'pl': 'whois.dns.pl',
    'pr': 'whois.nic.pr',
    'pro': 'whois.registrypro.pro',
    'pt': 'whois.dns.pt',
    'ro': 'whois.rotld.ro',
    'ru': 'whois.ripn.ru',
    'sa': 'saudinic.net.sa',
    'sb': 'whois.nic.net.sb',
    'sc': 'whois2.afilias-grs.net',
    'se': 'whois.nic-se.se',
    'sg': 'whois.nic.net.sg',
    'sh': 'whois.nic.sh',
    'si': 'whois.arnes.si',
    'sk': 'whois.sk-nic.sk',
    'sm': 'whois.ripe.net',
    'st': 'whois.nic.st',
    'su': 'whois.ripn.net',
    'tc': 'whois.adamsnames.tc',
    'tel': 'whois.nic.tel',
    'tf': 'whois.nic.tf',
    'th': 'whois.thnic.net',
    'tj': 'whois.nic.tj',
    'tk': 'whois.nic.tk',
    'tl': 'whois.domains.tl',
    'tm': 'whois.nic.tm',
    'tn': 'whois.ripe.net',
    'to': 'whois.tonic.to',
    'tp': 'whois.domains.tl',
    'tr': 'whois.nic.tr',
    'travel': 'whois.nic.travel',
    'tw': 'whois.apnic.net',
    'tv': 'whois.nic.tv',
    'ua': 'whois.ripe.net',
    'uk': 'whois.nic.uk',
    'gov.uk': 'whois.ja.net',
    'us': 'whois.nic.us',
    'uy': 'nic.uy',
    'uz': 'whois.cctld.uz',
    'va': 'whois.ripe.net',
    'vc': 'whois2.afilias-grs.net',
    've': 'whois.nic.ve',
    'vg': 'whois.adamsnames.tc',
    'ws': 'www.nic.ws',
    'yu': 'whois.ripe.net'
};

var net = require('net');
var url = require('url');
var s = new net.Socket({
    type: 'tcp4'
});

if (process.argv.length <2){
    console.log('whois.js url');
}else{
    main(process.argv[2]);
}

//console.log( process.argv[2] );

function showInfo(server, url){
    s.connect(43, server /*'whois.crsnic.net'*/);
    s.setEncoding('ascii');
    s.on('connect', function(){
        //s.end('zhenqiu.net\r\n');
        s.end(url + '\r\n');
    });

    s.on('data', function(data){
        console.log(data);
    });

    s.on('end', function(){
    });
}

function main(v){
    //TODO: check url
    var hostname = url.parse(v).hostname;
    var parts = hostname.split('.');
    var domain = parts[ parts.length-1];
    if(domain in WHOIS_SERVER){
        console.log('WHOIS Server : ' + WHOIS_SERVER[domain]);
        console.log('Hostname : ' + hostname);
        console.log('URL : ' + v);
        showInfo(WHOIS_SERVER[domain], hostname);
    }else{
        console.log('###');
    }
}