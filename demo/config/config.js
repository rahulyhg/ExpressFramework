// Database Details


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');





var config = {
    //database
    database: mongoose,
    
    //models
    Process: function() {
        var Process = require('../model/process');
        var ProcessModel = Process.model;
        return ProcessModel;
    },
    User: function() {
        var User = require('../model/user');
        var UserModel = User.model;
        return UserModel;
    },
    Leads: function() {
        var Leads = require('../model/leads');
        var LeadsModel = Leads.model;
        return LeadsModel;
    },
};
module.exports = config;

