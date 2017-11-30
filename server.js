//Web Server
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 8080, function(){
  console.log('serverstarted');
})
app.use(express.static("public"));

//Socket stuff
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', function(socket) {
  console.log('connected: ' + socket.id);
});
