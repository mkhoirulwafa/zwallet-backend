const express = require("express");
const Router = express.Router();
const users = require("../model/users");

Router.get("/", users.getAllUsers)        //Get All
      .get("/", users.getUserPagination)  //Get with Pagination
      .post("/", users.postUser)          //post
      .patch("/:id", users.patchUser)     //Patch
      .delete("/:id", users.deleteUser);  //delete

module.exports = Router;