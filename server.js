const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const LocalStrategy = require("passport-local").Strategy
const DB = require ("./models")
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser());
app.use(passport.initialize());
app.use(session({ secret: 'can of redbull' }));
app.use(passport.session());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  DB.User.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(new LocalStrategy(
  function(username, password, done) {
    DB.User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// // Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectDatabase");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});