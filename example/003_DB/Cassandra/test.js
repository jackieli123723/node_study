const cassandra = require('cassandra-driver');

function main(){
    let client = new cassandra.Client({ 
        contactPoints: ['192.168.99.100']
    });

    client.execute('select key from system.local', function(err, result) {
      if (err) throw err;
      console.log(result.rows[0]);
      // console.dir(client);
      // client.end();
      client.shutdown(()=>{
          
      });
    });

}
    
    
main();