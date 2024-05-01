const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.post('/', (req, res) => {
//   res.send('1111 Hello World!');
// });

app.use(express.json());

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('2222 Hello World!');
// });

// app.put('/', (req, res) => {
//   console.log(req.body);
//   res.send('2222 Hello World!');
// });

app.delete('/', (req, res) => {
  console.log(req.body);
  res.send('444 Hello World!');
});

app.listen(8080);