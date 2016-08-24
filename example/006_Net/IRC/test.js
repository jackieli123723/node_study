const irc = require('slate-irc'),
      net = require('net');
      
function main(){
    
    let client = irc(net.connect({
        host: 'irc.freenode.org',
        port: 6667
    }));
    client.pass('irc_password');
    client.nick('your_nick_name');
    client.user('irc_username','irc_realname');
    client.join('#test');
    client.on('errors', (err)=>{
        console.error(err);
    });
    client.on('message', (e)=>{
        console.log(e);
    });
    let c=0;
    client.on('join', ()=>{
        let timer_id = setInterval(()=>{
            
            ++c;
            if(c>10){
                clearInterval(timer_id);
                client.quit();
            }else{
                client.send('#test', 'hello'+c);
            }
        }, 1000);
    });
    
}
    
    
main();
