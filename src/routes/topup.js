const express = require("express");
const Router = express.Router();
const topup = require('../model/topup')

Router.get("/", topup.getAlltopup)            //Get with Ordered Result by number value (must comment get above to check)
      .post("/", topup.postTopup)             //post
      .patch("/:num", topup.patchTopup)       //patch
      .delete("/:number", topup.deleteTopup); //delete by number

module.exports = Router;
