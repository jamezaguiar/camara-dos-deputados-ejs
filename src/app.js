const express = require('express');
const routes = require('./routes');

const { resolve } = require('path');

const app = express();

app.use(express.json());
app.use(routes);

// EJS Configuration
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, 'views'));

module.exports = app;