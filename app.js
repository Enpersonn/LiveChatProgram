const express = require('express');
const app = express();
const expbs = require('express-handlebars')


app.engine('handlebars', expbs())
app.set('view engine', 'handlebars')

// Serve static files from the public directory
app.use(express.static('public'));

// Define the route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/pages/home.html');
});

app.get('/userList', (req, res) => {
    res.sendFile(__dirname + '/public/pages/userList.html')
});

app.get('/handleTest', (req, res) => {
    res.render("privRoom");
})



// Export the app object to be used in index.js
module.exports = app;
