const ext = require('./index');

function dir(){
    const [evt, p] = ext.wincmd(['dir']);
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
}
ext.listWinWifiPassword().then(console.log);
