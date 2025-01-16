const joi = require('joi')

const signinSchema = joi.object({
  email: joi.string().email().required().messages({
    'string.empty': 'email is required.',
    'string.email': 'invalid email format.'
  }),
  password: joi.string().min(8).max(20).required().messages({
    'string.empty': 'password is required.',
    'string.min': 'password needs at least {#limit} characters.',
    'string.max': 'password exceeds {#limit} characters.'
  })
})

const inputChecker = (req, res, next)=>{
  const { error } = signinSchema.validate(req.body)

  if (error) return res.status(400).json({ Error: error.details[0].message });

  next();
}

module.exports = { inputChecker }
