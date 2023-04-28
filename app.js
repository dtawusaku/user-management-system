const express = require('express');
const dotenv = require("dotenv");
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require("path")

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); // log requests to the console
// app.use(cors()); // enable CORS

// Configuration file
dotenv.config({path:'config.env'});

///Parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//View engine
app.set("view engine", "ejs");  
// app.set("views",path.resolve(__dirname,"views"))

///Load assets
app.use('/img',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/css',express.static(path.resolve(__dirname,"src")))




// Routes
app.use('/',require('./server/routes/router'))

// Start server
const PORT = process.env.PORT || 8080;  
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});