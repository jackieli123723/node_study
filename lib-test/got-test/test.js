const got = require('got');

function httpGet(){
    got.get('https://api.ipify.org?format=json', {
        headers: {
            'user-agent':'node client'
        }
    }).then(response => {
        console.log(JSON.parse(response.body)['ip']);
    }).catch(error => {
        console.log(error.response.body);
    });
}

function httpPost(){
    const API = 'http://127.0.0.1/rest/';
    got.post(API + 'member/login', {
        headers :{
            'user-agent':'node app'
        },
        body: {
            'UserID':'arick',
            'Passwd':'1234',
        }
    }).then(response => {
        console.log(response.body);
            
    })
    .catch(error => {
        console.log(error.response.body);
    });
}

function main(){
    httpGet();
    httpPost();
}

main();

