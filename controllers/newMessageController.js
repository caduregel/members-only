const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const newMessageController = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    console.log(req.user)
    db.createNewMessage(req.user.username, req.body.title, req.body.content, new Date())
    res.redirect("/")
})
const newMessageViewController = asyncHandler(async (req, res, next) => {
    if(!req.user){
        res.redirect("/")
    }
    res.render("createMessage", {})
})


module.exports = { newMessageController, newMessageViewController };