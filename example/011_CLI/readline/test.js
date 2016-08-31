const 
    readline = require('readline');

function read_input(message){
    return new Promise( (y,n) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(message, (answer)=>{
            y(answer);
            rl.close();
        });
    });
}

function interactive(comamnd_handler){
    let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    comamnd_handler = comamnd_handler || function(cmd){
        switch(cmd){
        case 'quit':
            return process.exit(0);
        case 'help':
            console.log('TODO: help');
            break;
        default:
            console.log('Invalid command');
            break;
        }
    };
    rl.on('line', cmd => {
        cmd = cmd.toLowerCase();
        comamnd_handler(cmd);
        
        rl.prompt();
    });
    rl.prompt();
}
function main(){
    // read_input('How are you?')
        // .then( console.log );
        
    interactive();
}
    
module.exports = {
    interactive: interactive,
    read_input: read_input
};
    
if (require.main === module) {
    main();
}