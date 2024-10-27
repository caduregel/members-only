const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const bcrypt = require("bcryptjs/dist/bcrypt");

const enter_club = asyncHandler(async (req, res, next) => {
    if (!req.user) {
        next(new Error("No user"))
    }
    if (req.body.code == "skibidi") {
        db.enterClubHouse(req.user.id)
        res.redirect('/')
    } else {
        res.render("enterClub", { badAttempt: true })
    }
})


module.exports = { enter_club, };