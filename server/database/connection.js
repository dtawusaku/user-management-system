const mongoose = require('mongoose');
const connectDB =  async()=>{
    try{
        //MongoDb Connection String
<<<<<<< HEAD
        const con = await mongoose.connect("mongodb+srv://dtawusaku:sHd6TUOF75orAok3@ums.wodsjpd.mongodb.net/?retryWrites=true&w=majority",{
=======
        const con = await mongoose.connect(process.env.MONGO_URI,{
>>>>>>> a2f42901e71bf200cf639c631e4db3223d0738d0
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