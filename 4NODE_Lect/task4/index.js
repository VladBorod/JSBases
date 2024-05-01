const express = require('express');

const app = express();

const Joi = require('joi');

let uniqueID = 0;
const articles = [];

const articleSchema = Joi.object({  
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
});

const idSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
});

app.use(express.json());

app.get('/articles', (req, res) => {
  res.send({articles});
});

app.get('/articles/:id', (req, res) => {
  const idValidationResult = idSchema.validate(req.params);
  if (idValidationResult.error) {
    return res.status(404).send({ error: idValidationResult.error.details[0].message });
  }
  const article = articles.find((article) => article.id === Number(req.params.id));
  if (article){
    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null })
  }
});

app.post('/articles', (req, res) => {

  // if (!req.body.title) {
  //   return res.status(404).send({ error: 'Invalid title' });
  // }
  // if (!req.body.content) {
  //   return res.status(404).send({ error: 'Invalid content' });
  // }
  // if (req.body.title.length <= 5){
  //   return res.status(404).send({ error: 'Invalid title length, mast be more than 5 characters' });
  // }
  // if (req.body.content.length <= 10){
  //   return res.status(404).send({ error: 'Invalid content length, mast be more than 10 characters' });
  // }

  const articleValidationResult = articleSchema.validate(req.body);
  if (articleValidationResult.error) {
    return res.status(404).send({ error: articleValidationResult.error.details[0].message });
    // return res.status(404).send(articleValidationResult.error.details);
  }
  
  uniqueID++;

  articles.push({
    id: uniqueID,
    ...req.body
  })

  res.send({
    id: uniqueID,
  })
});

app.put('/articles/:id', (req, res) => {
  const idValidationResult = idSchema.validate(req.params);
  if (idValidationResult.error) {
    return res.status(404).send({ error: idValidationResult.error.details[0].message });
  }

  const articleValidationResult = articleSchema.validate(req.body);
  if (articleValidationResult.error) {
    return res.status(404).send({ error: articleValidationResult.error.details[0].message });
  }
  
  const article = articles.find((article) => article.id === Number(req.params.id));

  if (article){
    article.title = req.body.title;
    article.description = req.body.content;

    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null })
  }
});

app.delete('/articles/:id', (req, res) => {
  const article = articles.find((article) => article.id === Number(req.params.id));
  if (article){
    const articleIndex = articles.indexOf(article);
    articles.splice(articleIndex, 1);

    res.send({ article });
  } else {
    res.status(404);
    res.send({ article: null })
  }
});

app.listen(8080);