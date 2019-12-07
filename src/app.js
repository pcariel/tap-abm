const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')

const app = express();

// Configuration express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

module.exports = app;
