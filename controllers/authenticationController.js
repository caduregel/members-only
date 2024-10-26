const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const bcrypt = require("bcryptjs/dist/bcrypt");

const post_sign_up = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if(err){
            console.log(err)
        } else {
            await db.createUser(req.body.username, hashedPassword)        
        }
      });
      res.redirect("/")
})


module.exports = { post_sign_up, };