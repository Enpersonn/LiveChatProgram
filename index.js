const http = require('http');
const app = require('./app');
const startSocketServer = require('./socketServer');

const port = 3000;

// Create a new HTTP server instance
const server = http.createServer(app);

// Start the Socket.io server
startSocketServer(server);

// Listen for incoming connections on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});