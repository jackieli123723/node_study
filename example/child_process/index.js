const 
    cp = require('child_process'),
    {EventEmitter} = require('events'),
    {co} = require('../001_Syntax/Promise/index'),
    {AppError} = require('../001_Syntax/Error/index'),
    {findall} = require('../001_Syntax/Regex/index');


function wincmd(c){
    let args = ['/c'];
    // args = args.concat(c)
    if (c) {
        for (let i = 0; i < c.length; i++) {
          args = args.concat(c[i])
        }
    }
    // console.log(args);
    let _cmd = cp.spawn('cmd', args);
    let evt = new EventEmitter();
    return [evt, new Promise( (y,n)=>{
        // spawn('cmd', ['/c', 'dir\n']);
        let stdout_msg = [];
        _cmd.stdout.on('data', data =>{
            console.log(data);
            evt.emit('stdout_data', data);
            stdout_msg.push(data);
        });
        
        let stderr_msg = [];
        _cmd.stderr.on('data', data=>{
            evt.emit('stderr_data', data);
            stderr_msg.push(data);
        });

        _cmd.on('exit', code=>{
            // console.log(code);
            evt.emit('exit', code);
            if(code === 0){
                y();
                return;
            }
            
            n(new AppError('cmd error', {
                stdout: stdout_msg,
                stderr: stderr_msg
            }));
        });
    // return evt;
    })];
}


function exec(cmd){
    return new Promise((y,n)=>{
        cp.exec(cmd, (err, s)=>{
            if(err){
                n(new AppError({
                    name: 'CommandError',
                    info: {
                        cmd: cmd,
                        previousError: err
                    }
                }));
                return;
            }
            y(s);
        });
    });
}

function getWinWifiPassword(profile_name){
    return co(function*(){
        const s = yield exec(`chcp 65001 | netsh wlan show profiles ${profile_name} key=clear`);
        // console.log(s);
        let r = /Key Content\s+:\s(.*)/.exec(s);
        if(!!r){
            return r[1]; 
        }
            
        throw new AppError({name:'KeyNotFoundError', info:{name: profile_name}});
    });
}

/**
 * 列出 Windows 儲存的 Wifi 密碼
 *
 */
function listWinWifiPassword(){
    return co(function*(){
        const s = yield exec(`chcp 65001 | netsh wlan show profiles`);
        let result = [];
        for(let v of findall(/.* : (.*)/g, s)){
            let pwd = yield getWinWifiPassword(v[1]).catch( err => {
                // console.error(err);
                return null;
            });
            if(pwd === null){
                continue;
            }
            result.push({
                name:v[1],
                password: pwd
            });
            // console.log(v[1]);
        }
        
        return result;
    });
}
    
module.exports = {
    wincmd,
    getWinWifiPassword,
    listWinWifiPassword
};


    