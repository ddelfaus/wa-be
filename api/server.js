const express = require('express'); // import the express package
const authRouter = require("../auth/auth-router.js")
const movesRouter = require("../moves/moves-router.js")
const workoutsRouter = require("../workouts/workouts-router.js")
const cors = require('cors'); 
const server = express(); // creates the server

// handle requests to the root of the api, the / route

server.use(cors())
server.use(express.json())
server.get('/', (req, res) => {
  res.send('Hello from Express');
});



server.use('/api/auth', authRouter)
server.use('/api/moves', movesRouter)
server.use('/api/workouts', workoutsRouter)






module.exports = server;