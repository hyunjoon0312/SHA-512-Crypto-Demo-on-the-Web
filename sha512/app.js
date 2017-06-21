var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sha512 = require('./sha512.js');
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('views'));
app.use('/', sha512);
app.listen(3000,function(){
  console.log('--------Connected port 3000-------');
});
