const express = require('express');
const mongoose = require('mongoose');
const courselib = require('./backend/lib/courselib');
const config = require('./backend/config/config');
const dbConnect = require('./backend/db/dbconnect');

dbConnect.connect();

const app = express();

app.use(express.static(__dirname+"/frontend"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(function(req,res,next){
    console.log("Request came");
    next();
});

var todos=[];

app.post('/api/todo',function(req,res){

    var newTodo=req.body;
    todos.push(newTodo);
    res.json(newTodo);

});

app.get('/api/todos',function(req,res){
    res.json(todos);
});

app.get('/api/todos/:todoId',function(req,res){

    let todoId=req.params.todoId;
    // console.log(todoId.value)
    let idx=-1;

    for(let i=0;i<todos.length;i++){
        if(todos[i].id==todoId){
            idx=i;
            break;
        }
    }

    if(idx==-1)
        res.json({error:'user not found'});
    else{
        res.json(todos[idx]);
        res.json({message:success});
    }
    res
        .status(404)
        .send('Task not found');

});

app.put('/api/todo/:todoId',function(req,res){

    let todoId=req.params.todoId;
    let newtodo=req.body;
    let idx=-1;

    for(let i=0;i<todos.length;i++){
        if(todos[i].id==todoId){
            idx=i;
            break;
        }
    }

    if(idx==-1)
            res.json({error:'user not found'});
    else{
        todos[idx]=newTodo;
        res.json({message:success});
    }
});

app.delete('/api/todo/:todoId',function(req,res){

    let todoId=req.params.todoId;
    let idx=-1;

    for(let i=0;i<todos.length;i++){
        if(todos[i].id==todoId){
            idx=i;
            break;
        }
    }

    if(idx==-1)
        res.json({error:'user not found'});
    else{
        res.json(todos[idx]);
        todos.splice(idx,1);
        res.json({message:success});
    }


});

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

//todo
app.get("/todo", function(req, res){
    let filePathName8=__dirname+"/frontend/html/todo.html"
    res.sendFile(filePathName8);
})

//todoapi
app.get("/todoapi", function(req, res){
    let filePathName9=__dirname+"/frontend/html/todoapi.html"
    res.sendFile(filePathName9);
})

app.get("/crudoperations", function(req, res){
    let filePathName10=__dirname+"/frontend/html/crud.html"
    res.sendFile(filePathName10);
})

app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.post("/crud",courselib.addnewone);
app.put("/crud/:idd", courselib.update);

// Heroku will automatically set an environment variable called PORT

// Start the server
app.listen(config.webPort, function(){
    console.log("Server Starting running on http://localhost:"+config.webPort);
})
