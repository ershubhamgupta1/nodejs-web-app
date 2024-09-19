// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const {connectToDatabase} = require('./db');


// Serve a simple response
app.get('/', (req, res) => {
  res.send('Hello, Azure I have updated the code!!!!!');
});

app.get('/user', (req, res) => {
  res.send('Hello User');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} !!!!!`);
  connectToDatabase();
});
