var config = require('../config/config');
var mongoose=config.database; 


var Schema = mongoose.Schema({
        name: String,
        userName :String,
        password : String,
        acessLevel :String,
        birthDate :Date,
        
        
});
var Model = mongoose.model('User', Schema);


module.exports.model=Model;