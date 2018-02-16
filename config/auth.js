const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "829921908400-16igbf0ebmggnidfplggetsa0te00sr2.apps.googleusercontent.com",
            clientSecret: "mTeo47bUH54R230nOymF-8Q5",
            callbackURL: "http://localhost:3000/"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};