const { Router } = require("express");
const passport = require("../passport/passport.config")

const { get_sign_up, log_in_controller, post_sign_up, post_log_in_controller } = require("../controllers/authenticationController");


const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render('index', {})
})

// Main Page, should show login screen with option to sign up if not logged in already
indexRouter.get("/log-in", log_in_controller);
indexRouter.post('/log-in', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
}))

// Sign up routing
indexRouter.get('/sign-up', get_sign_up)
indexRouter.post('/sign-up', post_sign_up)

module.exports = indexRouter;