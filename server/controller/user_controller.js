const user = require('../model/user');

//Create user
exports.create = (req,res)=>{

    //If request form is not filled
    if(!req.body){
        res.status(400).send({
            message: "Message cannot be empty"
        });
    }

    //Create new user
    var new_user = new user({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status,
    })

    //Save to Database
    new_user.save()
            .then(data =>{
                res.send(data);
            })
            .catch(err =>{
                res.status(500).send({message:err.message});
            });

    res.send("User Created Successfuly");
}

exports.find = (req,res)=>{
  
    //Fetch all Users
    user.find()
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{  
            res.status(500).send({message:err.message});
        });

}
exports.findOne = (req,res)=>{
  //User id  
  const id = req.param.id;

  user.findById(id).then(user =>{
        //User not found
        if(!user){
            res.status(503).send({message:"User not found"});
        }
  }).catch(err =>{
        res.status(500).send({message:err});
  });

 

}

exports.update = (req,res)=>{
    //User id
    const id = req.param.id;

    //Validate Request
    if(!req.body){
        res.status(400).send({
            message: "Message cannot be empty"
        });
    }

    //Update User Details
    user.findByIdAndUpdate(id,req.body,{new:true}).then(
        user =>{
            //User not found
            if(!user){
                res.status(500).send({message:"User not found"})
            }

            res.send({
                data:user,
                message:"User Updated Successfully"});
        }
    ).catch(err =>{
        res.status(500).send({message:err || "Error occurred"})
    })


}

exports.delete = (req,res)=>{

    //Get user
    user.find(req.param.id)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{  
            res.status(500).send({message:err.message});
        });

}


// module.exports