const {wincmd} = require('./index');

const [evt, p] = wincmd(['dir']);
p.catch( err => console.error);

evt
    .on('stdout_data', data => {
        console.log(data.toString());
    })
    .on('stderr_data', data => {
        console.log(data.toString());
    })
    .on('exit', code => {
        console.log(code);
    });
