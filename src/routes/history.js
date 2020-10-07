const express = require("express");
const Router = express.Router();
const history = require('../model/history')

Router.get("/", history.getAllHistory)        //getAll & search

module.exports = Router;