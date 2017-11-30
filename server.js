//Web Server
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 8000, function(){
  console.log('serverstarted');
})
app.use(express.static("public"));

//Socket stuff
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', function(socket) {
  console.log('dates socket connected to some client: ', socket.id);

  socket.on('scriptCues', function(data) {
      console.log("got script cues");
      socket.broadcast.emit('scriptCues', data);
  });
});
