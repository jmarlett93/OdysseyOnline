'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");

const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const canary = require('./api/routes/canary.routes.js');
const user = require('./api/routes/user.routes.js');
require('./config/passport')(passport);

let router = express.Router();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cookieSession({
    name: 'session',
    keys: [process.env.APP_SESSION_KEY],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./api/routes/app.routes.js')(app, passport);

//app.options('/auth/google', cors(corsOptions));


app.use('/api/canary', canary);
app.use('/api/user', user);



module.exports = app;