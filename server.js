const express = require('express');

const app = express();

//home handler
app.get("/", function(req, res){
    res.send("Welcome to Sindhu's Basic Site");
})

//resume handler
app.get("/resume", function(req, res){
    filePathName=__dirname+"/resume.html"
    res.sendFile(filePathName);
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
