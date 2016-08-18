const pg = require('pg');

class DB{
    constructor(config){
        this.client = new pg.Client(Object.assign({
          user: 'guest', //env var: PGUSER 
          database: 'postgres', //env var: PGDATABASE 
          password: '', //env var: PGPASSWORD 
          port: 5432, //env var: PGPORT 
          max: 10, // max number of clients in the pool 
          idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
        }, config));
    }
    
    connect(uri){
        return new Promise( (y,n)=>{
            this.client.connect((err)=>{
                if(err){
                    n(err);
                    return;
                }
                y()
            });
        });
    }
    
    query(sql, params =[]){
        return new Promise((y,n)=>{
            this.client.query(sql, params, (err, result)=>{
                if(err){
                    n(err);
                }else{
                    y(result)                    
                }
            });
        });
    }

    close(){
        return new Promise((y,n)=>{
            if(this.client){
                this.client.end((err)=>{
                    if(err){
                        n(err);
                    }else{
                        y();
                    }
                    this.client = null;
                });
            }else{
                y();
                this.client = null;
            }
        });
    }
}

module.exports.DB = DB;


function main(){
    let config = {
        user: 'cwchiu'
    };
    let db = new DB(config);
    
    db.connect()
        .then( () => {
            return db.query('delete from test');
        })
        .then( () => {
            return db.query('insert into test (name, date) values ($1, $2)', ['arick', new Date()]);
        })
        .then( (result) => {
            return db.query('select * from test where name = $1', ['arick']);
        })
        .then( (result) => {
            console.log(result.rowCount);
            for(let v of result.rows){
                console.dir(v);
            }
            // console.dir(result.rows);
            console.log(['final', result]);
            return db.close();
        })
        .catch( reason=>{
            console.error(reason);
        });

}

if (require.main === module) {
    main();
}