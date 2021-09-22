const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./controllers");






app.use(routes);