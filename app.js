'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const canary = require('./api/routes/canary.routes.js');
const user = require('./api/routes/user.routes.js');
const User = require('./dataAccess/models/user');

let router = express.Router();

const port = 3000;
const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(passport.initialize());

console.log(process.env.GOOGLE_APP_ID);
 
passport.use(new GoogleStrategy({
     clientID: process.env.GOOGLE_APP_ID,
     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     callbackURL: "http://localhost:3000/auth/google/callback"
   },
   function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        User.findOne({ 'google.id':profile.id },
         function (err, user) {
            if (err) {
                return done(err);
            }
            console.log(user);
            if (user) {
           
                if(user.google.id === undefined){
                    user.google.id = profile.id;
                    user.google.token = accessToken;
                    user.google.email = profile.email;
                    user.save();
                 }
                  return done(null, user);        

            } else {
                let newUser = new User();
                newUser.google.id = profile.id;
                 newUser.google.token = accessToken;
                 newUser.google.email = profile.email;
                      
                newUser.save(err => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }

                    return done(null, newUser);
                });
            }
        });
    });
}
 ));

 
 function generateUserToken(req, res){
     const accessToken = token.generateUserToken(req.user.id);
 }

 app.get('/auth/google',
  passport.authenticate('google', {
      session:false,
     scope: ['profile', 'email']
 }));

 app.get('/auth/google/callback',
     passport.authenticate('google', {failureRedirect: '/'}),
     (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/'); 
     }
 );

app.use('/canary', canary);
app.use('/user', user);

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;