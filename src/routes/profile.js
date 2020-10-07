const express = require("express");
const Router = express.Router();
const profile = require('../model/profile');

Router //Get profile (concat firstName & lastName => fullname)
      .get("/", profile.getPersonalById)        //Get 1 profile (page Profile > personal info)
      .post("/", profile.create)                //post
      .patch("/:id", profile.update)            //Patch (used in change password, change pin)
      .delete("/:id", profile.delete);          //delete

module.exports = Router;