let request = require('request');
let address = '高雄市三民區建國320號';
let url = `http://maps.google.com/maps/api/geocode/json`;
request({
    'method' : 'get',
    'url': url,
    'qs': {
        'address' : address,
        'sensor' :false
    },
    'headers': {
        'User-Agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)'
    }
}, (err, resp) => {
    if(err){
        console.log(err);
        return;
    }
    // console.log(resp.body);
    let jd = JSON.parse(resp.body);
    // console.log(jd);
    console.log(`latitude=${jd.results[0].geometry.location.lat},longitude=${jd.results[0].geometry.location.lng}`);
});
