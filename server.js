var express = require('express');
var app = express();
var port = process.env.PORT||3300;
var mongoose = require('mongoose');
var Task = require('./api/models/model');
var bodyParser = require('body-parser');
const uri="mongodb+srv://rakib:rakib@cluster0-0bgt6.mongodb.net/TodoDb?retryWrites=true&w=majority";
//mongoose.connect('mongodb://localhost/Tododb',{useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connect(uri,{useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true});
var db =mongoose.connection;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/route');
routes(app);
app.use((req,res)=>{
    res.status(404).send({url: req.originalUrl + "not found"});
});
app.listen(port);
console.log("App started from 3300 port "+port);