const path = require("node:path");

require("dotenv").config('./.env');
const express = require("express");
const indexRouter = require('./routes/indexRouter')
const session = require('express-session');
const passport = require("./passport/passport.config")

const { body, validationResult } = require("express-validator");
const methodOverride = require("method-override");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter)
// app.use(methodOverride('_method'));


// Tell app to listen on PORT
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));