const { Router } = require("express");
const exampleRouter = require("./exampleRoute");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", { message: 'Hello World!' }));
indexRouter.use('/example', exampleRouter)

module.exports = indexRouter;