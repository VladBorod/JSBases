'use strict';

const http = require('http');

let mainCounter = 0;
let aboutCounter = 0;

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': "text/html; charset=UTF-8"});
        mainCounter++;
        res.end(`<h1>WELCOME to my site</h1>\n <p>Main page visited ${mainCounter} times</p>`);      
    } else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': "text/html; charset=UTF-8"});
        aboutCounter++;
        res.end(`<h1>About me</h1>\n <p>About page visited ${aboutCounter} times</p>`);
    } else {
        res.writeHead(404, {'Content-Type': "text/html; charset=UTF-8"}); 
        res.end('<h1>404 Not Found</h1>', );
        // const container = document.querySelector('div.container');
        // const newLinkElement1 = document.createElement('link');
        // newLinkElement1.innerHTML = 'GO TO MAIN';
        // newLinkElement1.url = 'http://http://127.0.0.1:8080/'
        // container.appendChild(newLinkElement1);
    }
});

const port = 8080;

server.listen(port, () => {
    console.log(`Server started with port ${port}`);
});


