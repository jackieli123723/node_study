const mssql = require('mssql');


function main(){
    let conn = new mssql.Connection({
        user: 'arick',
        password: '1234',
        server: 'localhost',
        database: 'test'
    }, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        
        let req = new mssql.Request(conn);
        req.query('select * from tblUser', (err, rs)=>{
            if(err){
                console.log(err);
                return;
            }
            
            console.dir(rs);
        });
        
        let req2 = new mssql.Request(conn);
        req2.input('name', mssql.VarChar, 'arick');
        req2.query('select * from tblUser where name= @name', (err, rs)=>{
            if(err){
                console.log(err);
                return;
            }
            
            console.dir(rs);
        });
    });
}
    
main();
