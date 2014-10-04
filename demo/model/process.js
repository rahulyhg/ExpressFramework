var config = require('../config/config');
var mongoose=config.database; 


var Schema = mongoose.Schema({
    pname: String,
    supervisior: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    agents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    quality: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
var Model = mongoose.model('Process', Schema);


module.exports.model=Model;