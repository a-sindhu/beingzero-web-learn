const mongoose = require('mongoose');
const config = require('../config/config');
const connectionString = config.mongoConnectionString;
//console.log(connectionString);

module.exports={
    connect:function(){
        mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
        mongoose.connection.on('connected',function(){  
            console.log("Database Connected");
         })
    }
}