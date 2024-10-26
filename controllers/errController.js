const asyncHandler = require("express-async-handler");

const errController = asyncHandler(async (err, req, res, next) => {
    if(err){
        res.send("<h1>There was an error</h1>")
    }
})


module.exports = { errController, };