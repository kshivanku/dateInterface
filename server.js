//Web Server
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 8080, function(){
  console.log('serverstarted');
})
app.use(express.static("public"));
