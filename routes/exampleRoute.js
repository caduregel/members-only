const { Router } = require("express");
const exampleController = require("../controllers/exampleController");
// const { render } = require("ejs");

const exampleRouter = Router();

exampleRouter.get("/", exampleController);

module.exports = exampleRouter;