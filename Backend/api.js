var express = require ('express');
var app = express ();
var port = process.env.PORT || 9800;
var cors = require('cors');
var bodParser= require('body-parser');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var mongourl = "mongodb+srv://Nithya:mongo@123@cluster0.o3fi9.mongodb.net/dashboard?retryWrites=true&w=majority";
var db;
var path = require('path');

app.use(cors());

app.use(bodParser.urlencoded({extended:true}));
app.use(bodParser.json())

app.get('/',(req,res) => {
    res.send("Api is working")
});

app.get('/project',(req,res) => {
    db.collection('project_table').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
app.get('/todolist',(req,res) => {
    db.collection('todo_list').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongourl,(err,connection)=>{
    if(err) throw err
    db = connection.db('dashboard');
    app.listen(port,(err)=>{
        if(err)throw err
        console.log(`Server is running in port ${port}`)
    })
})