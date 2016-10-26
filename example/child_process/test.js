const {wincmd} = require('./index');

wincmd(['/c', 'dir'])
    .on('stdout_data', data => {
        console.log(data.toString());
    })
    .on('stderr_data', data => {
        console.log(data.toString());
    })
    .on('exit', code => {
        console.log(code);
    })