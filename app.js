const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');

const routes = require('./routes/index');
const home = require('./routes/home');
const stores = require('./routes/stores');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build/index.html')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/api', routes);
app.get('/api/home', home);
app.get('/api/stores', stores);


module.exports = app;
