const express = require('express');

const server = express();
const morgan = require('morgan')
const helmet = require("helmet")

//custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} to ${req.originalUrl} at ${new Date()}`);
  next();
}

server.use(helmet());
server.use(morgan('tiny'))
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware! Or take a break we have come so far</h2>`);
});

module.exports = server;
