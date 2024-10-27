const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const showMessageController = asyncHandler(async (req, res, next) => {
    if(!req.user){
        res.redirect("/log-in")
    }
   const messages = await db.getAllMessages()
   console.log(messages)
   res.render("index", {posts: messages, user: req.user, inClub: req.user.in_club_house})
})


module.exports = { showMessageController };