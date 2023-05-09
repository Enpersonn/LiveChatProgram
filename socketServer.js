const { Server } = require('socket.io');

var OpenRooms = ["69"]

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

    socket.on("msgSend", (msg) => {
      console.log("Server recived msg: ", msg);
      socket.broadcast.emit("msgRecive", msg); // send the message to all clients except the sender
    });

    socket.on("addRoom", (RoomNum) => {
      OpenRooms.push(RoomNum)

      console.log(OpenRooms);
    });

    socket.on("RemoveRoom", (RoomNum) => {
      function DelRoom( value ){
        if(value == "69") return;
        return value != RoomNum;
      }
      OpenRooms = OpenRooms.filter( DelRoom );
      console.log(OpenRooms);
    });

  });

}

module.exports = startSocketServer;
