const express = require('express');

const app = express();

// Set up handlebars engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Define the route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/home.html');
});

app.get('/userList', (req, res) => {
    res.sendFile(__dirname + '/public/pages/userList.html')
});





// Export the app object to be used in index.js
module.exports = app;
