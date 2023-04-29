const express = require('express');
const route = express.Router();
const services = require("../services/render")


route.get('/',services.homeRoutes)
route.get('/add-user',services.add_user)
route.get('/edit-user',services.edit_user)
route.get('/update-user',services.update_user)
route.get('/delete-user',services.delete_user)




module.exports = route;