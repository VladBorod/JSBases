'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const { checkBody, checkParams } = require('./validation/validator');
const { idSchema, userSchema } = require('./validation/scheme');

const filePath = path.join(__dirname, 'users.json'); 

const app = express();

app.use(express.json());

/**
 * All users output
 */

app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  res.send({ users });
});

/**
 * User output by ID
 */

app.get('/users/:id', checkParams(idSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user){
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

/**
 * User change
 */

app.put('/users/:id', checkParams(idSchema), checkBody(userSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user){
    user.firstName = req.body.firstName;
    user.secondName = req.body.secondName;
    user.age = req.body.age;
    user.city = req.body.city;
    fs.writeFileSync(filePath, JSON.stringify(users));
    res.send({ user });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

/**
 * User insert
 */

app.post('/users', checkBody(userSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let usersLastId = users.at(users.length - 1).id;
  users.push({
    id: ++usersLastId,
    ...req.body
  })
  fs.writeFileSync(filePath, JSON.stringify(users));
  res.send({ id: usersLastId, });
});

/**
 * Delete user
 */

app.delete('/users/:id', checkParams(idSchema), (req, res) => {
  const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const userIndex = users.findIndex((user) => user.id === Number(req.params.id));
  if (userIndex >= 0){
    users.splice(userIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(users));
    res.send({ status: 'User successfully deleted.' });
  } else {
    res.status(404);
    res.send({ user: null });
  }
});

/**
 * Error processing
 */

app.use((req, res) => {
  res.status(404).send({
    message: 'URL not found'
  });
});

const port = 8080;
app.listen(port, () => console.log(`Starting with port ${port}`));