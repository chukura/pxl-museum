// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();
const dotenv = require('dotenv');
dotenv.config();

// app.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// base route
server.get('/', (req, res) => {
  res.send('Welcome to the PXL Museum API');
});

// routes
require('../server/routes/collection.routes')(server);

// set port & listen for requests
const PORT = process.env.PORT || 7000;
server.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`),
);