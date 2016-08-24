const fs = require('fs');
// let engine = ts('magnet:?xt=urn:btih:6292ae6cab55cb6ca361eed91e3100bc8699aa74');
let uri = 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d&dn=sintel.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel-1024-surround.mp4';
function test1(){
    const ts = require('torrent-stream');
    let engine = ts(uri);
    engine.on('ready', ()=>{
        console.log('ready');
        for(let f of engine.files){
            console.log(f.name);
            let stream = f.createReadStream();
            let target = fs.createWriteStream(f.name);
            stream.pipe(target);
        }
    });
    engine.on('download', index=>{
        console.log(`download ${index}`);
    });
    engine.on('torrent', ()=>{
        console.log('torrent event');
    });
    engine.on('idle', ()=>{
        console.log('idle event');
    });
}

function main(){
    const WebTorrent = require('webtorrent');

    let client = new WebTorrent();
    client.on('error', console.error);


    client.add(uri, { path: 'd:\\' }, function (torrent) {
        for(let f of torrent.files){
            console.log(`${f.name} : ${f.length} Bytes`);
        }
        
        torrent.on('download', function (bytes) {
            console.log('just downloaded: ' + bytes)
            console.log('total downloaded: ' + torrent.downloaded);
            console.log('download speed: ' + torrent.downloadSpeed)
            console.log('progress: ' + torrent.progress)
        });
        torrent.on('done', function () {
            console.log('torrent download finished')
            client.destroy();
        });
    });
}
    
    main();