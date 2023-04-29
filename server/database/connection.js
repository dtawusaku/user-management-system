const mongoose = require('mongoose');
const connectDB =  async()=>{
    try{
        //MongoDb Connection String
        const con = await mongoose.connect("mongodb+srv://dtawusaku:sHd6TUOF75orAok3@ums.wodsjpd.mongodb.net/?retryWrites=true&w=majority",{
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