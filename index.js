const server = require('./server.js');

server.listen(5003, () => {
  console.log('\n* Server Running on http://localhost:5003 *\n');
});
