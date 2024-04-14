'use strict';


// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('<h1>Hellooooooo World</h1>');
// });

// server.listen(8080);

// function counter(n){
//     console.log(n);
//     // setTimeout(() => counter(n + 1), 0);
//     counter(n + 1);
// }

// setTimeout(() =>{
//     console.log('Script successfully ended!');
//     process.exit();
// }, 1000);

// ----------------------------------------------------------------

// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('Server started!');   
// });
// const port = 8080;
// server.listen(port, () => {
//     console.log(`Server started with port ${port}`);
// });

// ----------------------------------------------------------------

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
        res.end('<h1>404 Not Found</h1>');
    }
});

const port = 8080;

server.listen(port, () => {
    console.log(`Server started with port ${port}`);
});


