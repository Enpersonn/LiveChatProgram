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

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const user = {
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  res.render('user', { user });
});

app.get('/privChatRoom/:id', (req, res) =>{

})





// Export the app object to be used in index.js
module.exports = app;
