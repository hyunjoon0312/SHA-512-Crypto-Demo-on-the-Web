var express = require('express');
var crypto = require('crypto');
var rt = express.Router();




var jumin_hash = function jumin_hash(number){
  var hash = crypto.createHash('sha512');
  hash.update(number);
  return hash.digest('hex');
};

rt.post('/sha', function(req, res, next){
  console.log('post method');
  var number = req.body.number;
  var salt = req.body.salt;


  var result = jumin_hash(number+salt);
  var double = jumin_hash(result);

  res.render('sha.html', {_result: result, _salt: salt, _number:number, _double:double });
});


rt.get('/', function(req, res){
  console.log('get method');
  res.render('index.html');
});


module.exports = rt;
