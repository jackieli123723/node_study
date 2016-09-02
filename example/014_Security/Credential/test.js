const
    credential = require('credential'),
    pw = credential();

function hash(password){
    return new Promise( (y,n)=>{
        pw.hash(password, (err, hash)=> {
          if (err) { 
              return n( err); 
          }
          y(hash);
        });
    });
}

function verify(password, hash){
    return new Promise( (y,n)=>{
        pw.verify(hash, password, function (err, is_valid) {
            var msg;
            if (err) { 
              return n( err); 
            }
            y( is_valid );
        });
    });
}

function main(){
    let password = 'mypassword';
    hash(password)
        .then( hash => {
            return Promise.all([
                verify(password, hash),
                verify('bad password', hash)
            ]);
        })
        .then( results => console.log(results) )
        .catch(console.error);
}

module.exports = {
    hash:hash,
    verify: verify
};
    
if (require.main === module) {
    main();
}
