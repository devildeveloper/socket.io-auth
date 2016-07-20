'use strict'

const Client = require('socket.io-client')('http://localhost:3000',{
    extraHeaders : {
        'authorization' : 'cats'
    }
});

Client.on('connect',(data)=>{
    console.log('connected');
});
//event propio
Client.on('connected',(data)=>{
    console.log(data);
});
//error por caida del servidor
Client.on('connect_error',(data)=>{
    console.log(data);
});
Client.on('error',(data)=>{
    console.log(data);
});
