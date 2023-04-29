const express = require('express');
const route = express.Router();
const services = require("../services/render")


const services = require("../services/render")
const controller = require("../controller/controller");


route.get('/',services.homeRoutes)
route.get('/add-user',services.add_user)
route.get('/edit-user',services.edit_user)
route.get('/update-user',services.update_user)
route.get('/delete-user',services.delete_user)

// API
// route.get("/api/users".controller.find);
// route.post("/api/users".controller.create);
// route.put("/api/users".controller.update);
// route.post("/api/users".controller.delete);


module.exports = route;