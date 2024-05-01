const Joi = require('joi');

const articleSchema = Joi.object({  
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
});

const idSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
});

module.exports = { articleSchema, idSchema };