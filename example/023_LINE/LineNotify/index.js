const   
    koa = require('koa'),
    bodyParser = require('koa-bodyparser'),
    request = require('request-promise'),
    config = require('./config'),
    Router = require('koa-router'),
    querystring = require('querystring'),
    CALLBACK_URL = `http://localhost:${config.port}`;

let USERS = {};
function code2token(cfg){
    return request({
        url: 'https://notify-bot.line.me/oauth/token',
        method: 'post',
        form: {
            grant_type: 'authorization_code',
            code: cfg.code,
            client_id: config.client_id,
            client_secret: config.client_secret,
            redirect_uri: CALLBACK_URL
        }
    }).then( JSON.parse);
}
function apiStatus(cfg){
    return request({
        url: 'https://notify-api.line.me/api/status',
        method: 'get',
        resolveWithFullResponse: true,
        headers: {
            'Authorization': `Bearer ${cfg.token}`
        },
    }).then( resp => {
        let body = JSON.parse(resp.body);
        if(body.status == 200){
            return {
                username: body.target,
                limit: resp.headers['x-ratelimit-limit'],
                imagelimit: resp.headers['x-ratelimit-imagelimit'],
                remaining: resp.headers['x-ratelimit-remaining'],
                imageremaining: resp.headers['x-ratelimit-imageremaining'],
                reset: resp.headers['x-ratelimit-reset'],
            };
        }else{
            return resp;
        }
            
    });
}

function sendNotify(cfg){
    return request({
        url: 'https://notify-api.line.me/api/notify',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${cfg.token}`
        },
        form: {
            message: cfg.message            
        }
    });
}

function startLineNotifyServer(cfg){
    cfg = Object.assign({
        port: 3001,
        client_id: null,
        client_secret: null,
    }, cfg);
    
    const app = koa();
    app.use(bodyParser()); // post body 處理

    let router = new Router();
    router.get('/', function *() {
        // this.body = `GET Data: ${JSON.stringify(this.request.query)}`;
        
        if( this.request.query.code ){
            // USERS[ this.request.query.state ] = this.request.query.code;
            
            yield code2token({
                code: this.request.query.code
            }).then(c => {
                // console.log(c);
                if(c.status == 200){
                    USERS[ this.request.query.state ] = {
                        code: this.request.query.code,
                        token: c.access_token
                    };
                    this.body = `${this.request.query.state} ok`;
                    console.log(USERS);
                }else{
                    this.body = `${c.status}: ${c.message}`;
                }
            }).catch( err => this.body = err);
        }else{
            this.body = `
            <div><a href="/line">登陸</a></div>
            <div><a href="/msg">訊息發送</a></div>
            `;
        }
        // console.log(this.request.body);
        
        
    });
    router.post('/line', function *() {
        if(!this.request.body.user){
            this.body = 'invalid user';
            return;
        }
        
        let auth_url = 'https://notify-bot.line.me/oauth/authorize?' + querystring.stringify({scope:'notify',
                response_type:'code',
                client_id: cfg.client_id,
                redirect_uri: CALLBACK_URL,
                state: this.request.body.user
            });
        console.log(auth_url);
        this.redirect( auth_url );
    });
    router.get('/line', function *() {
        this.body = `<!DOCTYPE html>
            <html>
            <head>
                <title>登陸</title>
                <meta charset="utf-8">
            </head>
            <body>
            <form id = 'form1' method="post" action="/line">
                <input type="text" name="user" value="arick">
                
                <input type="submit" value="發送"br>
            </form>
            </body>
            </html>`;
    });
    
        
    router.post('/msg', function*(){
        // console.log(this.request.body);
        // this.body = 'ok';
        let user = USERS[ this.request.body.user ];
        if(!user){
            this.body = 'token not found';
            return;
        }
        console.log( user );
        yield sendNotify({
            token: user.token,
            message: this.request.body.message
        }).then((c)=>{
            this.body = c;
        }).catch( err => this.body = err);
        
        
    });
    router.get('/msg', function*(){
      let options = '';
      for(let u in USERS){
          options += `<option value="${u}"}">${u}</option>`;
      }
      this.body = `<!DOCTYPE html>
    <html>
    <head>
        <title>訊息發送</title>
        <meta charset="utf-8">
    </head>
    <body>
    <div>Token: ${JSON.stringify(USERS)}</div>
    <form id = 'form1' method="post" action="/msg">
        <select name="user">
            ${options}
        </select>
        <input type="text" name="message" value="Hello">
        
        <input type="submit" value="發送"br>
    </form>
    </body>
    </html>`;
      });

    app.use(router.middleware());

    app.on('error', function(err,ctx){
        console.log(err);
    });   

    app.listen(cfg.port);
    console.log(`listening on port ${cfg.port}`);
}

startLineNotifyServer(config);