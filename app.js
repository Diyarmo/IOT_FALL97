const cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/htmlfiles/sign-up.html'));
});

app.listen(PORT);