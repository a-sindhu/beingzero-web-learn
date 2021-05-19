const mongoose = require('mongoose');

module.exports.connect = function(){
    const password=process.env.Mongo_atlas_password;
    //contains db server-db name -username -password
    const connectionString="mongodb+srv://Sindhu:"+password+"@cluster0.09ahp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    // const dbOptions={};

    mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

    mongoose.connection.on('connected',function(){  
        console.log("Database Connected");
    })
}