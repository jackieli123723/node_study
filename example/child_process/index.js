const spawn = require('child_process').spawn;
const EventEmitter = require('events').EventEmitter;

function wincmd(c){
    let _cmd = spawn('cmd', c);
    let evt = new EventEmitter();
    // spawn('cmd', ['/c', 'dir\n']);
    _cmd.stdout.on('data', data =>{
        evt.emit('stdout_data', data);
    });

    _cmd.stderr.on('data', data=>{
        evt.emit('stderr_data', data);
    });

    _cmd.on('exit', code=>{
        evt.emit('exit', code);
    });
    return evt;
}

module.exports = {wincmd};


    