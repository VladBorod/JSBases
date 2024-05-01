'use strict';

const express = require('express');
const app = express();  

app.get('/', (req, res) => {
  res.send('<h1>Welcome</h1><a href="/about">About</a>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1><a href="/">Home</a>');
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server started with port ${port}`);
});