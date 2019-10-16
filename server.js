var express = require('express');
var app = express();
port = process.env.PORT||3300;
app.listen(port);
console.log("App started from 3300 port "+port);
