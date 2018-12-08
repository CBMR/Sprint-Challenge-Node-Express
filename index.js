const express = require('express');
const cors = require('cors');

const server = express();

const PORT = process.env.PORT || 5050;


server.listen(PORT, () => {
  console.log(`express server is running on port ${PORT}`)
})