'use strict';

const express = require('express');
const app = express(); 
const path = require('path');
const fs = require('fs');
const FILE_NAME = 'counter.json';

app.get('/', (req, res) => {
  const pathToFile = path.join(__dirname, FILE_NAME);
  const countData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
  countData.main += 1;
  fs.writeFileSync(pathToFile, JSON.stringify(countData, null, 2));
  res.send(`<h1>Welcome</h1><p>Visited ${countData.main} times</p><a href="/about">About</a>`);
});

app.get('/about', (req, res) => {
  const pathToFile = path.join(__dirname, FILE_NAME);
  const countData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
  countData.about += 1;
  fs.writeFileSync(pathToFile, JSON.stringify(countData, null, 2));
  res.send(`<h1>About</h1><p>Visited ${countData.about} times</p><a href="/">Home</a>`);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server started with port ${port}`);
});


