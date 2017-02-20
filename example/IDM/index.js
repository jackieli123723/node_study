const
    edge = require('../../native_module/edge');
    
const SendLinksArray = edge.func(function () {/*
#r "IDManLib.dll"
using System.Collections.Generic;

async (dynamic cfg) => {
    var idm1 = new IDManLib.CIDMLinkTransmitterClass();
    List<string> urls = new List<string>();
    foreach(var v in cfg.urls){
        urls.Add( (string) v);
    }
    Console.WriteLine(urls.ToArray());
    idm1.SendLinksArray( (string)cfg.referrer, urls.ToArray());
    
    return "a";
}
*/});
const SendLinkToIDM = edge.func(function () {/*
#r "IDManLib.dll"
using System.Collections.Generic;

async (dynamic cfg) => {
    var idm1 = new IDManLib.CIDMLinkTransmitterClass();

    idm1.SendLinkToIDM(
        (string) cfg.url,
        (string) cfg.referrer, 
        (string) cfg.cookie, 
        (string) cfg.postData, 
        (string) cfg.user, 
        (string) cfg.password, 
        (string) cfg.targetFolder,
        (string) cfg.targetFilename,
        0);
       return "a";

}
*/});

module.exports.addLinks = function(cfg){
    cfg = Object.assign({
        referrer: '',
        urls: []
    }, cfg);
    
    return new Promise((y,n)=>{
        if(!cfg.urls || cfg.urls.length <=0){
            n('no link');
            return;
        }
        SendLinksArray(cfg, function (error, result) {
            if (error) {
                n(error);
                return;
            }
            y(); 
        });
    });
};

module.exports.addLink = function(cfg){
    cfg = Object.assign({
        url:"http://www.internetdownloadmanager.com/idman401.exe",
        referrer: '',
        cookie: '',
        postData: '',
        user: '',
        password: '',
        targetFolder: 'd:\\',
        targetFilename: 'idman401.exe'        
    }, cfg);
    
    return new Promise((y,n)=>{
        SendLinkToIDM(cfg, function (error, result) {
            if (error) {
                n(error);
                return;
            }
            y(); 
        });
    });
};