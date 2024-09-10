// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve a simple response
app.get('/', (req, res) => {
  res.send('Hello, Azure!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
