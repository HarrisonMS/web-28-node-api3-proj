const express = require('express');

const server = express();
const morgan = require('morgan')
const helmet = require("helmet")
const {logger} = require("./middleware/logger")

//custom middleware


server.use(helmet());
server.use(morgan('tiny'))
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware! Or take a break we have come so far</h2>`);
});

module.exports = server;
