const { object } = require('joi');
const Joi = require('joi');

const EmployeeSchema = Joi.object({
    ID: Joi.number().integer().required(),
    Name:Joi.string().required(),
    Email:Joi.string().email().required(),
    Phone:Joi.string().required(),
})

module.exports = EmployeeSchema;