'use strict';

const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const articles = [
  { title: 'Article 1', description: 'First Article' },
  { title: 'Article 2', description: 'Second Article' },
  { title: 'Article 3', description: 'Third Article' },
  { title: 'Article 4', description: 'Fourth Article' },
  { title: 'Article 5', description: 'Fifth Article' },
  { title: 'Article 6', description: 'Sixth Article' },
];

app.get('/', (req, res) => {
  res.render('home', { layout: 'index', title: 'Home', articles });
});

app.listen(8080);