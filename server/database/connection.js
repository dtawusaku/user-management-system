const mongoose = require('mongoose');
const dotenv = require("dotenv");

// Configuration file
dotenv.config({path:'config.env'});

const connectDB =  async()=>{
    try{
        //MongoDb Connection String
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB