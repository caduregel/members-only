const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const errController = asyncHandler(async (req, res, err) => {
    console.log(err);
    res.render("error", {});
})

module.exports = errController;