const http = require('http');

// Create server object
const server = http.createServer((req, res) => {
  // Write respose
  res.write('hello world!\r\n');
  res.end();
});

// Handle errors
server.on('error', (err) => {
  throw err;
});

//
server.listen(3000, () => console.log('Server running...'));
