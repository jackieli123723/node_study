let request = require('request'),
    util = require('util'),
    path = require('path'),
    fs = require('fs');
    

function report(){

try{
    var c = fs.readFileSync(path.join(__dirname, 'CloudamSetting.conf'), 'utf-8');
    var rule = /(.*)=(.*)/g;
    var data = {};
    while((ret =rule.exec(c)) != null){
        if(ret[1]=='MGSUUID'){
            data['mgs_id'] = ret[2];
        }else if(ret[1]=='CloudPort'){
            data['mgs_port'] = ret[2];
        }else if(ret[1]=='CloudServer'){
            data['mgs_host'] = ret[2];
        }
        //console.log(ret[1] + '=>' + ret[2]);
    }
    
    //console.log(c);
}catch(ex){
}

data['mgs_port'] = data['mgs_port'] || 443;

//console.log(data);
//console.log(util.format('https://%s:%s/rest/service/UpdateDeviceInfo', data['mgs_host'], data['mgs_port']));
request({
    uri: util.format('https://%s:%s/rest/service/UpdateDeviceInfo', data['mgs_host'], data['mgs_port']),
    method: 'POST',
    body: JSON.stringify({
        "Version": "2.0",
        "DeviceInfo": {
            "NVR": {
                "vendor": "Ingrasys",
                "model": "NVRP", // /getServerInfo.cgi 取得
                "sn": data['mgs_id'],
                "mac": "FA:16:3E:45:A1:3F"
            },
            "PortInfo": {
                "NAT": {
                    "http": 80,
                    "https": 443,
                    "rtsp": 554,
                    "proxy": 8080,
                    "proprietary": [
                        12480,
                        12482,
                        12483
                    ]
                },
                "Local": {
                    "http": 80,
                    "https": 443,
                    "rtsp": 554,
                    "proxy": 8080,
                    "proprietary": [
                        12480,
                        12482,
                        12483
                    ]
                }
            },
            "LocalAddrList": [
                {
                    "ip": "192.168.100.2",
                    "mask": "255.255.255.0",
                    "gateway": "192.168.100.1"
                }
            ],
            "WanIP": "10.57.78.86",
            "TraversalResult": {
                "Mode": "NAT Traversal",
                "ErrNo": 0,
                "ErrMsg": "OK"
            },
            "InternetGatewayDevice": {
                "friendlyName": "Unkown",
                "manufacturer": "Unkown",
                "modelName": "Unkown",
                "modelNumber": "Unkown",
                "serialNumber": "Unkown",
                "Lan": {
                    "ip": "1.1.1.1",
                    "mask": "255.255.0.0",
                    "gateway": "2.2.2.2"
                },
                "Wan": {
                    "ip": "3.3.3.3",
                    "mask": "255.0.0.0",
                    "gateway": "4.4.4.4"
                }
            }
        }
    }),
    timeout : 60000,
    rejectUnauthorized: false // 不驗證 SSL
}, function(err, resp, body){

    setTimeout(function(){
      report();
    }, 60000);


    if(err){
        console.log(err);
        return;
    }
    
    console.log(resp.statusCode);
    console.log(body);
    //console.log([resp, body]);
});


}


report();
