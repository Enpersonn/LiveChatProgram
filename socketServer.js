const { Server } = require('socket.io');

function startSocketServer(server) {
  // Create a new instance of Socket.io and pass the server object
  const io = new Server(server);

  // Listen for connections from clients
  io.on('connection', (socket) => {
    console.log(socket.id);

    // Listen for the 'disconnect' event
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
}

module.exports = startSocketServer;
