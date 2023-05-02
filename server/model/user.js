const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    // password:{
    //     type:String,
    //     required:true,
    // },
    gender:String,
    status:String,
})


const Users = mongoose.model('users',schema);

module.exports = Users;