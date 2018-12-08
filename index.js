const express = require('express');
const cors = require('cors');

const server = express();

const projectRouter = require('./routes/projectRouter')
const actionRouter = require('./routes/actionRouter')

const PORT = process.env.PORT || 5050;

server.use(
    cors(),
    express.json()
    )

  //CRUD endpoint for the projects
server.use('/api/projects', projectRouter);

  //CRUD endpoints for the actions
server.use('/api/actions', actionRouter);

server.listen(PORT, () => {
  console.log(`express server is running on port ${PORT}`)
})