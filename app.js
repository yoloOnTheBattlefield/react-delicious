const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const routes = require('./routes/index');

const mongoose = require('mongoose');
mongoose.connect('mongodb://dang:dang@ds019654.mlab.com:19654/delicious', {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => console.log(err));



//Serve static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')));

//Configure app to use the body-parser, it will help us when you hook it up to postman
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Put all api endpoints under '/api'
app.use('/', routes);

module.exports = app;
