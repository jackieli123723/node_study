const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
mongoose.Promise = global.Promise;

let userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    level: {type: Number, required: false}
});

userSchema.pre('save', function (next) {
    var self = this;
    console.log(`save> ${this.password}`);
    console.log(`save> ${this.username}`);
    if (!self.isModified('password')) {
        return next();
    }

    self.password = '1234';
    next();

});
let User = mongoose.model('User', userSchema);

function main(){
    // ³s½u
    var uri = 'mongodb://127.0.0.1/db2';
    mongoose.connect(uri);
    
    User.remove({username:'Arick'})
        .then( results =>{
            let p = new User({username: 'Arick', password: '4321'});
            return p.save();
        })
         .then( doc=>{
             console.log(`after save: ${JSON.stringify(doc)}`);
             // return User.update({username:'Arick'},{'$set':{
             return User.findOneAndUpdate({username:'Arick'},{'$set':{
                    level: 999
                }}, { multi: true });
         })
         .then( doc =>{
            console.log(`after update: ${JSON.stringify(doc)}`);
            return User.findOne({username:'Arick'});
         })
         .then( user =>{
             console.log(user);
         })
         .catch( console.error )
         .then( ()=>mongoose.disconnect() );
}

if(require.main == module){
    main();
}