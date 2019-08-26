var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var Users = require('./api/user');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
-
/* route to handle login */
app.use('/user', Users);

app.listen(5000);