var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
  res.send('<html><head></head><body><h3>OH OH OH</h3></body></html>');
});

app.get('/api',function(req,res){
  res.json({date:'0320',week:'7'});
});
app.listen(port);
