const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const canary = require('./api/canary.js');
const auth = require('./config/auth.js');
cookieParser = require('cookie-parser'),
cookieSession = require('cookie-session');

let router = express.Router();

//config
const port = 3000;
const app = express();

// auth(passport);
// app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.use(cookieSession({
//     name: 'session',
//     keys: ['123']
// }));
// app.use(cookieParser());

// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['https://www.googleapis.com/auth/userinfo.profile']
// }));

// app.get('/auth/google/callback',
//     passport.authenticate('google', {failureRedirect: '/'}),
//     (req, res) => {
//        req.session.token = req.user.token;
//        res.redirect('/'); 
//     }
// );

app.use('/canary', canary);

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req,res) => {
//     if (req.session.token) {
//         res.cookie('token', req.session.token);
//         res.json({
//             status: 'session cookie set'
//         });
//     } else {
//         res.cookie('token', '')
//         res.json({
//             status: 'session cookie not set'
//         });
//     }
// });


module.exports = app;