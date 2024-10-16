const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const { passport } = require("../passport/passport.config");
const bcrypt = require("bcryptjs/dist/bcrypt");

const log_in_controller = asyncHandler(async (req, res, next) => {
    res.render("loginView", {})
})

const get_sign_up = asyncHandler(async (req, res, next) => {
    res.render('signUpView', {})
})

const post_sign_up = asyncHandler(async (req, res, next) => {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if(err){
            console.log(err)
        } else {
            await db.createUser(req.body.username, hashedPassword)
        }
      });
})


module.exports = { log_in_controller, get_sign_up, post_sign_up, };