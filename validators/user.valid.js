const Joi = require('joi')

module.exports = Joi.object().keys({
    login: Joi.string().trim().min(2).max(44),
    password: Joi.string().trim().min(7).max(66)
})
