const express = require('express');
const dotEnv = require('dotenv');


// Load environment variables
dotEnv.config();

const app = express();


// Load the routes
const employeeRoutes = require('./Routes/Employee.route');

// use the  json to get data from POST
app.use(express.json());


// get request
app.use('/employees', employeeRoutes);



module.exports = app;
