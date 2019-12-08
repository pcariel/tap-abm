const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const { isAuth } = require('./middleware');
const { loggingExpress } = require('./logging');
const { CompanyAPI, LoginAPI, UserAPI } = require('./api');

const app = express();
const swaggerDocument = require('../swagger.json');

// Configuration express
app.use(loggingExpress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

// Swagger Config
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Register Routers
const userAPI = new UserAPI();
const companyAPI = new CompanyAPI();
const loginAPI = new LoginAPI();

app.use('/users', isAuth, userAPI.router);
app.use('/company', companyAPI.router);
app.use('/login', loginAPI.router);

module.exports = app;
