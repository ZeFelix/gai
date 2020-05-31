require("dotenv").config();

const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");

const routes = require("./router");
const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
