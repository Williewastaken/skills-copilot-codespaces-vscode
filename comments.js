// Create web server
// Create a web server that listens on port 3000 and serves the comments HTML file. The file is located in the public directory. The file should be read asynchronously and sent to the client using the response object.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile(path.join(__dirname, 'public', 'comments.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('File not found!');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});