const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const routes = require('./routes/index');

//Serve static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')));

//Configure app to use the body-parser, it will help us when you hook it up to postman
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Put all api endpoints under '/api'
app.use('/', routes);

// app.get('*', (req, res) => {
//   app.use(express.static(path.join(__dirname, 'client/build')));
// });

module.exports = app;
