// Importing Express library
const express = require('express');
const app = express();

// Define the port for the application to run on
const port = process.env.PORT || 3000;

// Basic route to serve a "Hello World" message
app.get('/', (req, res) => {
  res.send('Hello from SAP Cloud Foundry!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
