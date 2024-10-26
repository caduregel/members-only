const { Router } = require("express");
const passport = require("../passport/passport.config")

const { post_sign_up, post_log_in_controller } = require("../controllers/authenticationController");


const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render('index', { user: req.user })
})

// Main Page, should show login screen with option to sign up if not logged in already
indexRouter.post('/log-in', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
}))

// Sign up routing
indexRouter.get('/sign-up', (req, res) => {
    res.render('signUpView', {})
})
indexRouter.post('/sign-up', post_sign_up)

// log out
indexRouter.get("/log-out", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });
module.exports = indexRouter;