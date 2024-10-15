const path = require("node:path");
require("dotenv").config('./.env');
const db = require("./db/queries");

// Express
const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");

// Auth
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

// Views
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
const indexRouter = require('./routes/indexRouter')
const exampleRouter = require('./routes/exampleRoute')

// Example session
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
// passport
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
      const user = rows[0];
  
      done(null, user);
    } catch(err) {
      done(err);
    }
  });

app.use('/', indexRouter)

// Tell app to listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));