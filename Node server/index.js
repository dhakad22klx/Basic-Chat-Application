// Node server which will handle socket io connection

//create a Socket.IO server using Node.js

// const io = require('socket.io')(8000);

//require('socket.io'):This line imports the Socket.IO library into your Node.js application. 
//The require function is a common way to include external modules in Node.js.(8000):

//This part of the code immediately invokes the socket.io function, creating a Socket.IO server.
//The 8000 argument represents the port number on which the server will listen for incoming connections.
//In this case, it's set to port 8000.


// const io = require('socket.io')(8000,{
//     cors: {
//       origin: '*',
//     }



//   //The cors option is specifying the Cross-Origin Resource Sharing configuration for the Socket.IO server.
//   //In this case, it allows any origin ('*') to access the Socket.IO server. 
//   //This is useful during development when you might have different origins for your client and server.
  
// });

const io = require('socket.io')(8000,{
  cors: {
    origin: '*',
  }
});

const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined',name=>{
        users[socket.id]= name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive',{message: message, name: users[socket.id]})
    });
    
    socket.on('disconnect', message =>{
      socket.broadcast.emit('leave',users[socket.id]);
      delete users[socket.id];
    });
});
