const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");
const axios = require("axios");

// Middleware
app.use(morgan("dev")); // log requests to the console
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.use(cors()); // enable CORS

// MongoDB Connection
connectDB();

// Configuration file
dotenv.config({ path: "config.env" });

///Parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

//View engine
app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views"))

///Load assets
app.use("/assets", express.static(path.resolve(__dirname, "assets")));

// Routes
app.use("/", require("./server/routes/router"));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  // console.log(path.resolve(__dirname, "assets")); Testing to understnad the concept
});
