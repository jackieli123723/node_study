const spawn = require('child_process').spawn;
const EventEmitter = require('events').EventEmitter;

class AppError extends Error{
    constructor(msg='', info={}){
        super(msg);
        this.name = 'AppError';
        this.info = info;
    }
}
function wincmd(c){
    let args = ['/c'];
    // args = args.concat(c)
    if (c) {
        for (let i = 0; i < c.length; i++) {
          args = args.concat(c[i])
        }
    }
    // console.log(args);
    let _cmd = spawn('cmd', args);
    let evt = new EventEmitter();
    return [evt, new Promise( (y,n)=>{
        // spawn('cmd', ['/c', 'dir\n']);
        let stdout_msg = [];
        _cmd.stdout.on('data', data =>{
            // console.log(data);
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

module.exports = {wincmd};


    