const { Router } = require("express");
const passport = require("../passport/passport.config")

const { post_sign_up, post_log_in_controller } = require("../controllers/authenticationController");
const { enter_club } = require("../controllers/enterClubController");
const { newMessageController, newMessageViewController } = require("../controllers/newMessageController");
const { showMessageController } = require("../controllers/showMessagesController");


const indexRouter = Router();

indexRouter.get("/", showMessageController)

// Create new message
indexRouter.get('/new', newMessageViewController)
indexRouter.post("/new", newMessageController)

// Main Page, should show login screen with option to sign up if not logged in already
indexRouter.post('/log-in', passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/sign-up"
}))

indexRouter.get('/log-in', (req, res)=>{res.render("log-in")})

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

// Enter club house
indexRouter.get("/enter", (req, res) => {
  res.render("enterClub", { badAttempt: false })
})
indexRouter.post('/enter', enter_club)

module.exports = indexRouter;