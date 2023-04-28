const express = require('express');
const route = express.Router();


route.get('/',(req,res)=>{

    res.render('index');
})

route.get('/e',(req,res)=>{
    res.send("Yes");
})






module.exports = route;