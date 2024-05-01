function checkParams(schema) {
  return (req, res, next) => {
    const validationResult = schema.validate(req.params);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error.details[0].message });
    }
    next();
  }
};

function checkBody(schema){
  return (req, res, next) => {
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error.details[0].message });
    }
    next();
  }
}

module.exports = { checkParams, checkBody };