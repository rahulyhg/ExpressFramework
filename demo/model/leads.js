var config = require('../config/config');
var mongoose=config.database; 


var Schema = mongoose.Schema({
    leadName: String,
    pname: { type: mongoose.Schema.Types.ObjectId, ref: 'Process' },
 
});
var Model = mongoose.model('Leads', Schema);


module.exports.model=Model;