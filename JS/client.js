
// //The code you've provided is establishing a connection to a Socket.IO server at the specified URL http://localhost:8000.
// // This is a common way to create a Socket.IO client instance in a JavaScript environment, typically used in a web browser.

// const socket = io('http://localhost:8000');

// //io('http://localhost:8000'): This code invokes the io function (presumably provided by the Socket.IO library) and passes the URL of the Socket.IO server as an argument.
// //In this case, it connects to a server running on the local machine at port 8000.

// //Make sure that your Socket.IO server is running at the specified URL (http://localhost:8000) for this client connection to be successful.
// // If the server is running, the socket variable can be used to send and receive events between the client and the server.

// const form = document.getElementById('send-container');
// const messageInput = document.getElementById('messageInp');
// const messageContainer = document.querySelector(".container");

// //creates a new Audio object and sets its source to the file named 
// //"chat.mp3" using a relative path "./chat.mp3"

// var sound = new Audio('./chat.mp3');


// function append(message,position)
// {
//     const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add('message');
//     messageElement.classList.add(position);
//     messageContainer.append(messageElement);

//     if(position==='left')
//     {
//         sound.play();
//     }
// }

// form.addEventListener('submit', (e) => {
    
//     e.preventDefault();
    
// //By calling e.preventDefault(); within an event handler.
// // you are telling the browser not to execute the default behavior associated with the event.

//     const message = messageInput.value;
//     append(`You:${message}`,'right');
//     socket.emit('send', message);
//     messageInput.value = '';

// });


// const name = prompt('Enter your name to join');

// socket.emit('new-user-joined', name);

// socket.on('user-joined', (name) => {
//     append(`${name} joined the chat`, 'right')
// });

// socket.on('receive', (data) => {
//     append(`${data.name}:${data.message} `, 'left')
// });

// socket.on('leave', (name) => {
//     append(`${ name} left the chat `, 'left')
// });


// // Other code...

var socket = io('http://localhost:8000');


// var name = prompt('Enter your name to join');


socket.on('connect', () => {
    console.log('Connected to the server');

    // Prompt for the user's name after a successful connection 
    
    // Perform actions that depend on the user's name or the connection...
});

socket.on('connect_error', (error) => {
    console.error('Connection error:', error);
    // Handle the error or take appropriate action
    const name = prompt('Enter your name to join');
});

// const name = prompt('Enter your name to join');

