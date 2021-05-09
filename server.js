const express = require('express');

const app = express();

app.use(express.static(__dirname+"/frontend"));

//home handler
app.get("/", function(req, res){
    let filePathName1=__dirname+"/frontend/html/basic.html"
    res.sendFile(filePathName1);
    // res.send("Welcome to Sindhu's Basic Site");
})

//resume handler
app.get("/resume", function(req, res){
    let filePathName2=__dirname+"/frontend/html/resume.html"
    res.sendFile(filePathName2);
})

//google handler
app.get("/google", function(req, res){
    let filePathName3=__dirname+"/frontend/html/google.html"
    res.sendFile(filePathName3);
})

//color handler
app.get("/color", function(req, res){
    let filePathName4=__dirname+"/frontend/html/colors.html"
    res.sendFile(filePathName4);
})

//login handler
app.get("/login", function(req, res){
    let filePathName5=__dirname+"/frontend/html/login.html"
    res.sendFile(filePathName5);
})

//register handler
app.get("/register", function(req, res){
    let filePathName6=__dirname+"/frontend/html/register.html"
    res.sendFile(filePathName6);
})

//piechart
app.get("/pie", function(req, res){
    let filePathName7=__dirname+"/frontend/html/piechart.html"
    res.sendFile(filePathName7);
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
