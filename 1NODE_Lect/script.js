
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<h1>Hello World\n</h1>');
});

server.listen(8080);
