const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { loggingExpress } = require('./logging');
const { CompanyAPI, LoginAPI, UserAPI } = require('./api');

const app = express();

// Configuration express
app.use(loggingExpress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

// Register Routers
const userAPI = new UserAPI();
const companyAPI = new CompanyAPI();
const loginAPI = new LoginAPI();

app.use('/users', userAPI.router);
app.use('/company', companyAPI.router);
app.use('/login', loginAPI.router);

module.exports = app;
