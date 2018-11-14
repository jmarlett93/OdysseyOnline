'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const auth = require('./config/auth.js');
const canary = require('./api/routes/canary.routes.js');
const user = require('./api/routes/user.routes.js');
const User = require('./dataAccess/models/user');


let router = express.Router();
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cookieSession({
    name: 'session',
    keys: [process.env.APP_SESSION_KEY],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(cookieParser());

auth(passport);
app.use(passport.initialize());

app.get('/', (req, res) => {
 res.json({
     status: 'session cookie not set'
 });
});

app.get('/auth/google', passport.authenticate('google', {
 scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
 passport.authenticate('google', {
     failureRedirect: '/'
 }),
 (req, res) => {
    req.session.token = req.user.token;
    res.redirect('/');
}
);

app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        res.cookie('token', '')
        res.json({
            status: 'session cookie not set'
        });
    }
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

app.listen(3000, () => {
 console.log('Server is running on port 3000');
});

console.log(process.env.GOOGLE_APP_ID);
 
// passport.use(new GoogleStrategy({
//      clientID: process.env.GOOGLE_APP_ID,
//      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//      callbackURL: "http://localhost:3000/auth/google/callback"
//    },
//    function (accessToken, refreshToken, profile, done) {
//     process.nextTick(function () {
//         User.findOne({ 'google.id':profile.id },
//          function (err, user) {
//             if (err) {
//                 return done(err);
//             }
//             console.log(user);
//             if (user) {
           
//                 if(user.google.id === undefined){
//                     user.google.id = profile.id;
//                     user.google.token = accessToken;
//                     user.google.email = profile.email;
//                     user.save();
//                  }
//                   return done(null, user);        

//             } else {
//                 let newUser = new User();
//                 newUser.google.id = profile.id;
//                  newUser.google.token = accessToken;
//                  newUser.google.email = profile.email;
                      
//                 newUser.save(err => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     }

//                     return done(null, newUser);
//                 });
//             }
//         });
//     });
// }
//  ));

 
//  function generateUserToken(req, res){
//      const accessToken = token.generateUserToken(req.user.id);
//  }

//  app.get('/auth/google',
//   passport.authenticate('google', {
//       session:false,
//      scope: ['profile', 'email']
//  }));

//  app.get('/auth/google/callback',
//      passport.authenticate('google', {failureRedirect: '/'}),
//      (req, res) => {
//         req.session.token = req.user.token;
//         res.redirect('/'); 
//      }
//  );



app.use('/canary', canary);
app.use('/user', user);

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;