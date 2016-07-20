'use strict'

const Server = require('http').createServer();
const Io = require('socket.io')(Server);
const PORT  = process.env.PORT || 3000;

Server.listen(PORT,()=>{
    console.log(`runngin on port: ${PORT}`)
});

Io.use((socket,next)=>{
    var handShake = socket.request;
    if ( handShake.authorization == 'cats' ){
        next();
    } else{
        next( new Error('not authorized') );
    }
});
Io.on('connection',(socket)=>{
    // your code
    socket.emit('connected',{message:'welcome'});
});
