require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./controllers");
const path = require("path");

const PORT = process.env.PORT || 3001;

app.use(routes);
