const express = require('express');
const route = express.Router();
const services = require("../services/render")
const controller = require("../controller/user_controller");


route.get('/',services.homeRoutes)
route.get('/add-user',services.add_user)
route.get('/edit-user',services.edit_user)
route.get('/update-user',services.update_user)
route.get('/delete-user',services.delete_user)



// API
route.get("/api/users",controller.find); // Fetch all Users
route.get("/api/users/find:id",controller.findOne); // Fetch a single user
route.post("/api/users",controller.create);
route.put("/api/users:id",controller.update);
route.delete("/api/users:id",controller.delete);


module.exports = route;