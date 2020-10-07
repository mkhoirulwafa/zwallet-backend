const express = require("express");
const Router = express.Router();
const transfer = require('../model/transfer')

Router.get("/", transfer.getAllTransfer)        //getAll & search
      .post("/", transfer.postTransfer)         //post
      .patch("/:id", transfer.patchTransfer)    //Patch
      .delete("/:id", transfer.deleteTransfer)  //delete

module.exports = Router;