const Joi = require('joi');

const userSchema = Joi.object({ 
  firstName: Joi.string().min(1).required(),
  secondName: Joi.string().min(1).required(),
  age: Joi.number().min(0).max(150).required(),
  city: Joi.string().min(1),
});

const idSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
});

module.exports = { userSchema, idSchema };