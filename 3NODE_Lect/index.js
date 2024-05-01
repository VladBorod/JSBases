const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`Request from ${req.ip}, ${req.url}, ${req.method}.`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('It is me!');
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server started with port ${port}`);
});