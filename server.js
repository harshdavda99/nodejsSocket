var express = require('express');

var app = express();
var http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000
app.get('/', (req,res)=> {
   res.send('connected server')
})



io.on('connection', socket => {
    console.log('ioconnection')
    socket.on('data1', function(data){

        socket.broadcast.emit('message', data);
    });
    socket.on('usersign', function(data){
        socket.broadcast.emit('addtocontact', data);
    })
    socket.on('disconnect', () => console.log('disconnected')); 
});
http.listen(PORT, () => {
    console.log('connected')
});

