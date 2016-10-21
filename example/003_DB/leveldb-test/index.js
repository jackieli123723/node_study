const 
    events = require('events'),
    path = require('path'),
    levelup = require('levelup');

function openDB(db_path){
    let db = null;
    return new Promise( (y,n)=>{
        levelup(db_path, {valueEncoding: 'json'}, (err, db)=> {
            if(err){
                n(err);
                return;
            }
            db = db;
            y(db);
        });
    }).then( db =>{
        return {
            getName: ()=>{
                return db_name;
            },
            getContext: ()=>{
                return db;
            },
            
            close(){
                return new Promise((resolve, reject)=> {
                    db.close( err => {
                        if(err){
                            reject(err);
                        }else{
                            resolve();
                        }
                    });
                });
            },
            
            get(key, default_value=null){
                return new Promise((resolve, reject)=> {
                    db.get(key, (err, val)=>{
                        if(err){
                            if(err.notFound){
                                resolve(default_value);
                            }else{
                                reject(err);
                            }
                        }else{
                            resolve(val);
                        }
                    });
                })
            },
            
            del(key){
                return new Promise((resolve, reject)=> {
                    db.del(key, (err)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve();
                        }
                    });
                });
            },
            put(key, val){
                return new Promise((resolve, reject)=> {
                    db.put(key, val, (err)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(val);
                        }
                    });
                });
            }
        }
    })
}

function dbGet(p, key, default_value){
    return p
            .then( inst => {
                return inst.get(key, default_value);
            });
}

function dbPut(p, key, value){
    return p
            .then( inst => {
                return inst.put(key, value);
            });
}


module.exports = {dbGet, dbPut, openDB}