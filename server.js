const express = require('express'); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});

// watch for connections on port 9000
server.listen(9000, () =>
  console.log('Server running on http://localhost:9000')
);