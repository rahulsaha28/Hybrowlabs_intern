const express = require('express');
const { getEmployees, setEmployee, getEmployeeById } = require('../Controller/Employee.controller');

const route = express.Router();

route.get('/' , getEmployees);
route.post('/', setEmployee);
route.get('/:id', getEmployeeById);

module.exports = route;